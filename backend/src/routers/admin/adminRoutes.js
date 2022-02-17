const express = require('express');
const { signup, signin } = require('../../controllers/admin/adminauth');
const router = express.Router();

router.post('/admin/signin',signin)

router.post('/admin/signup',signup)


router.post('/profile',(req,res)=>{
    res.status(200).json({
        user : "Profile"
    })
})
module.exports = router;