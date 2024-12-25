const express=require('express')
const app=express()


const cors=require('cors')

app.use(cors())


// for parsing the body
// Request Body (req.body): For POST requests or any request with a payload (e.g., form data or JSON), this object holds the parsed data. Middleware like express.json() or express.urlencoded() helps parse the body.



// bcrypt

const bcrypt=require('bcrypt')
// mongoose

const mongoose=require('mongoose')
// connect the mongoose
// name of the database auth1
mongoose.connect('mongodb://localhost:27017/auth1')
const model=require('./models/user')

app.use(express.json())


// ejs

app.set('view engine','ejs')


// jwt 
const jwt=require('jsonwebtoken')


app.post('/api/register',async (req,res)=>{
    // The res object represents the server’s response to the client.
    console.log(req.body.password)
    let actual_password=req.body.password;
       // bcrypt
    const storedhash = await bcrypt.hash(actual_password,12);
 
    
    console.log(storedhash)

    // db
    try{
        // decalare the variable
        const user=await model.create({
            name:req.body.name,
            gmail:req.body.gmail,
            password:storedhash,
        }) 
        res.json({status:'ok'})
        console.log("user registered with us")
    }
    catch(err)
    {
        res.json({staus:'error' ,error:"Duplicate email"})
        console.log("duplicate")
    }
})

// login post

app.post('/api/login',async (req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await model.findOne({email})
        // bcrypt
        const validPassword=await bcrypt.compare(password,user.password);

        if(user && validPassword)
        {
       
             res.status(200).json({message:"success"})
        }
        
    }catch(err)
    {
        console.log(err)
    }
})

app.get('/',(req,res)=>
{
    res.send("hello")
})

app.listen(3000,()=>
{
    console.log(("app running"));
    
})