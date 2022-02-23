const express = require('express');
const { signup, signin } = require('../../controllers/userauth');
const User = require('../../models/user');
const {validationRequest, isRequestValidated} = require('../../validators/authval')
const router = express.Router();

router.post('/signin',signin)

router.post('/signup',validationRequest,isRequestValidated,signup)


router.post('/profile',(req,res)=>{
    res.status(200).json({
        user : "Profile"
    })
})
router.get("/getlogin", async (req,res)=>{
    try{
       const getinfo = await User.find({})
       res.send(getinfo)
    }catch(e){
         res.status(400).send(e)       
    }
})
module.exports = router;