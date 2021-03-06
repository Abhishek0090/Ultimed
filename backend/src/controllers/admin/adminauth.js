const User = require('../../models/user');
const jwt = require('jsonwebtoken');

exports.signup = (req,res)=>{
    User.findOne({email : req.body.email})
    .exec((error,user)=>{
        if(user){
            return res.status(400).json({
                message :"Admin already registered"
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
        role : 'admin'
    });
    _user.save((error,data)=>{
        if(error){
            return res.status(400).json({
                message : "Something went wrong"
            })
        }
        if(data){
            return res.status(201).json({
                message : "Admin Created Successfully"
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
            if(user.authenticate(req.body.password) && user.role === "admin"){
               const token = jwt.sign({_id: user._id},SECRETKEY,{expiresIn : '1h'})     
               const {_id,firstName,lastName,email,role,fullName} = user
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