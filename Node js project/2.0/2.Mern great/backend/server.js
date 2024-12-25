const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const moongose=require('mongoose')
const cookieparser=require('cookie-parser')
const authRouter = require('./router/auth')


const app =express()
const port=process.env.port|| 7000

dotenv.config()
app.use(cors({credentials:true}))
app.use(express.json())
app.use(cookieparser())
// connecting to mongodb
moongose.connect(process.env.mongo).then(()=>
{
    console.log("connected to db")
}).catch(()=>
{
    console.log("not connected to db")
})



// API ENDPOINTS

app.use('/api/auth',authRouter)

app.listen(port,(req,res)=>
{
    console.log("app is running in port "+port)
})