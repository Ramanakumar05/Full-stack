const express=require('express')
const cors=require('cors')
const helmet = require('helmet')
const cookieparser=require('cookie-parser')
const app=express()


// mongoose

const mongoose=require('mongoose')
const router= require('./routers/authRouter')

// middle ware
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(cookieparser())
app.use(express.urlencoded({extended:true}))

// PORT
const PORT=process.env.PORT;

// routes
app.use('/api/auth',router)

// connect mongoose

mongoose.connect(process.env.MONGOURL).then(()=>
{
    console.log("connected to db")
}).catch((e)=>
{
    console.log(e.message)
})



app.get('/',(req,res)=>
{
    res.send("Hello World")
})
app.listen(PORT,()=>
{
    console.log("running")
})

