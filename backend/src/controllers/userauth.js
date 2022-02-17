const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.signup = (req,res)=>{
    User.findOne({email : req.body.email})
    .exec((error,user)=>{
        if(user){
            return res.status(400).json({
                message : "Email Already Exist"
            })
        }
    })

    const {firstName , lastName,email,password , userName} = req.body;
    const _user = new User({
        firstName,
        lastName,
        email,
        password,
        userName: Math.random().toString(),
       
    });
    _user.save((error,data)=>{
        if(error){
            return res.status(400).json({
                message : "Something went wrong"
            })
        }
        if(data){
            return res.status(201).json({
                message : "User Created Successfully"
            })
        }
    })

} 
const SECRETKEY = "ECOMMERCEKEY"
exports.signin = (req,res)=>{
    User.findOne({email : req.body.email})
    .exec((error,user)=>{
        if(error) return res.status(400).json({message : "Something went wrong"  })
        if(user){
            if(user.authenticate(req.body.password) ){
               const token = jwt.sign({_id: user._id},SECRETKEY,{expiresIn : '1h'})     
               const {_id,firstName,lastName,email,fullName,role} = user
               res.status(201).json({
                   token,
                   user : {
                       _id,firstName,lastName,email,role,fullName
                   }
               })
            
        }else{

            return res.status(400).json({
                message : "SomeThing went wrong" 
            }
            )
        }}
        else
        {
            return res.status(400).json({message:"Something went wrong"});
        } 
        });
}

exports.requireSignin = (req,res,next) =>{
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token,SECRETKEY);
    req.user = user;
    next();
} 