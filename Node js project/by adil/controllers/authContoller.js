const transport = require("../middlewares/sendmail");
const { signupSchema, signinSchema } = require("../middlewares/validator");
const usersModel = require("../models/usersModel");
const { tohash,dohashValidation } = require("../utils/hashing");

const jwt=require('jsonwebtoken')

exports.signup=async(req,res)=>
{
    const {email,password}=req.body;
    try{
        // validation from validator
        const{error,value}=signupSchema.validate({email,password});
        if(error)
        {
            return res.status(401).json({success:false,message:error.details[0].message})
        }
        // if user already exist
        var existing=await usersModel.findOne({email})
        if(existing)
        {
            res.status(400).json({success:false,message:"user already exists"})
        }
        // hashing the password
        const hashedpassword=await tohash(password,12);
        const newUser=new usersModel({
            email,
            password:hashedpassword
        })
        const result=await newUser.save();
        // after saving tha data mongo will retuen password to aviod weuse this
        result.password=undefined;
        res.status(201).json({
            success:true,
            message:"created or signed in",
            result
        })

    }catch(error)
    {
        console.log(error)
    }
}

// sign

exports.signin=async(req,res)=>{
    console.log("signin")
    // receive the email and password and store in variable
    const{email,password}=req.body;
    try{
        const {error,value}=signinSchema.validate({email,password})
        if(error)
        {
            console.log("here1")
            console.log(error)
            return res.status(401).json({success:false,message:error.details[0].message})
        }
        const existingUser=await usersModel.findOne({email}).select('+password')
        if(!existingUser)
        {
            console.log("here2")
            return res.status(401).json({success:false,message:"user not there"})
        }
        // compare password
        const result=await dohashValidation(password,existingUser.password)
        if(!result)
        {
            console.log("here3")
            return res.status(401).json({success:false,message:"Invaild credentials"})
        }
        const token=await jwt.sign({
            userId:existingUser._id,
            email:existingUser.email,
            verfied:existingUser.verified
        },process.env.TOKEN,{
            expiresIn:'8h'
        })

        // token cookie(cookiename,)
        res.cookie('Auth','Bearer'+token,{expires:new Date(Date.now()+8*3600000),httpOnly:process.env.NODE_ENV==='production',secure:process.env.NODE_ENV==='production'}).json({
            success:true,
            token,
            message:"loged in"
        })
    }
    catch(e)
    {
        console.log("here 4")
        console.log(e.message)
    }
}

exports.signout=async(req,res)=>
{
    res.clearCookie('Auth').status(200).json({success:true,message:"signout"})
};

// verification process
exports.sendVerificationCode=async (req,res)=>
{
    const {email}=req.body;
    try{
       const existing_user=usersModel.findOne({email});
       if(!existing_user)
       {
        return res.status(404).json({success:false,message:"User does not exists"})
       }
    //    check he is already verfied
       if(existing_user.verified)
       {
        return res.status(400).json({success:false,message:"You are already verified"})
       }

    //  generate random value
       const codeValue=Math.floor(Math.random()*1000000).toString();

       let info =await transport.sendMail({
        from:process.env.SENDING_EMAIL_ADDRESS,
        to:existing_user.email,
        sub:"verification",
        html:'<h1>'+codeValue+'<h1>'
       })
       if(info.accepted[0]===existing_user.email)
       {
        
       }
    }
    catch(error)
    {

    }
}