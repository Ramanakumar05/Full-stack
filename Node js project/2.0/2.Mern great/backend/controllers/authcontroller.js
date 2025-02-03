
const express=require('express')
const userModel=require('../model/usermodel')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const tranporter=require('../config/nodemailer')
// register
const register=async(req,res)=>
{
    const{name,email,password}=req.body;

    if(!name ||!email||!password)
    {
        // stop the excution by returning
        return res.json({success:false,message:"missing details"})
    }
    try{
        const existingUser= await userModel.findOne({email})
        if(existingUser)
        {
            return res.json({message:"User alredy existing"})
        }

        hashedPassword=await bcrypt.hash(password,10);
        const user=new userModel({name,email,password:hashedPassword});
        user.save();

        const token=jwt.sign(
            {id:user._id},
            process.env.jwt,
            {expiresIn:'1d'}
        )
        console.log(token)
        // res.cookie(name,token)
        res.cookie('token',token,{
            httpOnly:true,
            secure:process.env.NODE_ENV==='production',
            sameSite:process.env.NODE_ENV==='production' ?'none':'strict',
            maxAge:7*24*60*60*1000
        })

        // nodemaielr
        const mailOption={
            from:process.env.username,
            to:["22202043@rmd.ac.in"],
            subject:"Welcome to the apex",
            text:`welcome to the apex community and here is your username ${name} and email ${email} Thank you!!`
        }

        tranporter.sendMail(mailOption,(error,info)=>
        {
            if(error)
            {
                console.log("error"+error)
            }
            else{
                console.log(info)
            }
        })
        return res.json({success:true})
    }
    catch(error)
    {
        res.json({success:false,message:error.message})
    }
}

const login=async (req,res)=>
{
    const{name,email,password}=req.body;
    if(!email||!password)
    {
        return res.json({message:"email and password required"})
    }
    try{
        const user=await userModel.findOne({email})
        if(!user)
        {
            return res.json({message:"user not found"})
        }
        const ismatch=await bcrypt.compare(password,user.password)
        if(!ismatch)
        {
            return res.json({message:"user not found"})
        }

        const token=jwt.sign(
            {id:user._id},
            process.env.jwt,
            {expiresIn:'1d'}
        )
        console.log(token)
        // res.cookie(name,token)
        res.cookie('token',token,{
            httpOnly:true,
            secure:process.env.NODE_ENV==='production',
            sameSite:process.env.NODE_ENV==='production' ?'none':'strict',
            maxAge:7*24*60*60*1000
        })

        return res.json({success:true})

    }catch(error){
        return res.json({message:"user not found"})
    }
}

const logout=async(req,res)=>
{
    try{
        res.clearCookie('token')
        return res.json({message:logout})
    }
    catch(error){
        return res.json({error:error.message})
    }
}


const sendverifyotp=async (req,res)=>
{
    try{
        const {userId}=req.body;

        const user=await userModel.findbyId(userId)
        
        if(user.isverified)
        {
            return res.json({success:'already verified'})
        }

        const otp=String(Math.floor(100000+Math.random()*900000))

        user.verifyOtp=otp
        user.verifyOtpExpireAt=Date.now()+24*60*60*1000
        await user.save()



        const mailOption={
            from:process.env.username,
            to:user.email,
            subject:"from login",
            text:`otp ${otp}`,
            html:'<b>ramana</b>'
        }

        await tranporter.sendMail(mailOption);
        res.json({message:"message sent"})
        
    }
    catch(error)
    {
        res.json({error:error.message})
    }
}

const verifyemail=async (req,res)=>
{
    const {otp,userId}=req.body;

    if(!userId || !otp)
    {
        return res.json({message:"failed"})
    }
    try{
        const user=await userModel.findbyId(userId)

        if(!user)
        {
            return res.json({message:"failed"})
        }

        if(user.verifyOtp===''|| user.verifyOtp!==otp)
        {
            return res.json({message:'invaild otp'})
        }
        // if the otp is vaild then check exprie
        if(user.verifyOtpExpireAt<Date.now())
        {
            return res.json({success:false,message:'otp expried'})
        }
        // if not expried
        user.isverified=true;
        user.verifyOtp=''
        user.verifyOtpExpireAt=0;

        await user.save();
        return res.json({success:"email verified successfully"})

    }
    catch(error)
    {
        res.json({message:error.message})
    }
}
module.exports={register,login,logout,sendverifyotp,verifyemail}