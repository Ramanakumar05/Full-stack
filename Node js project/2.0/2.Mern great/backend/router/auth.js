const express=require('express');
const { register, login, logout, sendverifyotp, verifyemail,} = require('../controllers/authcontroller.js');
const userAuth = require('../middleware/userauth.js');


const authRouter=express.Router();

authRouter.post('/register',register)
authRouter.post('/login',login)
authRouter.post('/logout',logout)
authRouter.post('/send-verify-otp',userAuth,sendverifyotp);
authRouter.post('/verify-account',userAuth,verifyemail)

module.exports=authRouter