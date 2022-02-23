const { check ,validationResult} = require('express-validator');


exports.validationRequest = ()=>[    
    check('firstName','firstName is required').notEmpty(),
    check('lastName','lastName is Required').notEmpty(),
    check('email','Valid Email is required'),
    check('password','password must be at least of 6 characters long').isLength({min  : 6})
]

exports.isRequestValidated  = (req,res,next) =>{
    const errors = validationResult(req)
    if(errors.array().length  > 0){
        return res.send(400).json({error : errors.array()[0].msg})
    }
}