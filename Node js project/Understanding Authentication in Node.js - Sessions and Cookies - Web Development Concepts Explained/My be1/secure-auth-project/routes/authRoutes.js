const express=require('express');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const User=require('../models/User')
// const cookieParser=require('cookie-parser')

const router=express.Router();

const{verifyToken, checkRole}=require('../middleware/authmiddleware');

// register
router.post('/register',async(req,res)=>
{
    try{
        const {username,email,password,role}=req.body;

        // check if user alread exist in database
        let user=await User.findOne({email})
        if(user)
        {
            return res.status(400).json({message:"user is already registered with us"})
        }
        // if user is not already registered

        // create new user
        user=new User({username,email,password,role});
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    }
    catch(error)
    {
        console.log(error.message)
        res.status(500).json({message:"server error"})
    }
})


// login
router.post('/login',async(req,res)=>
{
    try{
        const{email,password}=req.body;
    // check if user exist
    const user=await User.findOne({email});
    if(!user)
    {
        return res.status(400).json({message:"User not found"});
    }
    // if user exixt check for password
    const isMatch=await bcrypt.compare(password,user.password)


    // The bcrypt.compare function compares the plain text password (password) with the hashed password (user.password).

    // Since bcrypt is used for hashing passwords, it hashes the plain text password using the same salt that was used to hash the stored password (user.password) and then compares the two.
    if(!isMatch)
    {
        return res.status(400).json({message:"invaild password"})
    }

    // Generate JWT TOKEN

    // jwt.sign parameters {Credentials},{JWT_SECRET},{options}

    const token=jwt.sign(
        {id:user._id,role:user.role},
        process.env.JWT_SECRET,
        {expiresIn:process.env.JWT_EXPIRES}
    )
    

    // adding the jwt in cookie

    // res.cookie("Token",token,{
    //     httpOnly:true, //prevents client side java script access. prevent xss attact 
    //     secure: true, maxAge: 3600000
    // })

    // req.user=user.role;
    res.json({message:"Login successful with the token "+token})
    // console.log(req.cookies)

    }catch(error)
    {
        res.status(500).json({message:"Server error"})
    }
})
router.get('/logout',(req,res)=>
{
    res.clearCookie("token");
    res.json({message:"logout successfull"})
})


// only admin
router.get('/admin',verifyToken,checkRole(["admin"]),(req,res)=>
{
    res.json({message:"wecome admin"})
})

// only admin and manager
router.get('/manager',verifyToken,checkRole(["admin","manager"]),(req,res)=>
{
    res.json({message:"wecome manager"})
})

// all users can access the route
router.get('/user',verifyToken,checkRole(["admin","manager","user"]),(req,res)=>
{
    console.log(req);
    res.json({message:"wecome user"})
})


module.exports = router;
