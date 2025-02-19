// manage the env datas(access)
require("dotenv").config();

const express=require("express")
const mongoose=require("mongoose")
const cookieParser=require('cookie-parser')
const cors=require("cors")
const helmet=require("helmet")


const authRoutes=require('./routes/authRoutes');
const {verifyToken, isAdmin } = require("./middleware/authmiddleware");
const app=express()



// middleware
// Allows app to read JSON from requests.
app.use(express.json())
// Helps to manage the cookies
app.use(cookieParser())
// refer to the notion notes
app.use(cors({credentials:true}))
app.use(helmet())


mongoose.connect(process.env.MONGO_URI).then(()=>
{
    console.log("database connected")
}).catch((e)=>
{
    console.log(e.error)
})

app.get('/',(req,res)=>
{
    res.send("Secure Auth API is running...")
})


// login and register routes in authRouter file
app.use("/api/auth",authRoutes);

app.listen(process.env.PORT,()=>
{
    console.log(`Server running on ${process.env.PORT}`)
})
