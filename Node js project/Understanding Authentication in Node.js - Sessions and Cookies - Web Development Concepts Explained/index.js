const express=require('express')

const bcrypt=require('bcrypt')
// First, let’s understand why we use sessions. Sessions help keep track of user data as they interact with your web application. For example, if a user logs in, their session can store their login status so they don’t have to log in again on every page.

const session=require('express-session')

// connect-mongodb-session
// and then pass the session varible as the function

const MongoDbsession=require('connect-mongodb-session')(session)

// const ejs=require('ejs')


const app=express()

// viewing template
app.set('view engine',"ejs")
// body parser
app.use(express.urlencoded({extended:true}))
const mongoose=require('mongoose')


// user model import

const UserModel=require('./Model/User')

mongoose.connect("mongodb://localhost:27017/sessions")
.then(res=>
{
    console.log("db connected")
}
)
.catch(err=>
{
    console.log(err)
}
)

// store session in mongodb

const store=new MongoDbsession({
    // connection string

    uri:'mongodb://localhost:27017/sessions',
    // collection
    collection:'mySessions'

    // and pass the store in session middleware
})




// middle ware for session
// this session fired for each and every request
app.use(session({
    secret:"key that will sign cookie",
    // determines whether the session should be saved back to the session store, even if it wasn’t modified during the request.


    // resave: false: The session will not be saved back to the store if it hasn’t been modified. This can improve performance by reducing unnecessary writes to the session store.

    // resave: true: The session will be saved back to the store on every request, regardless of whether it was modified. This is useful for session stores that don’t support the “touch” command, which updates the session’s expiration time without modifying the session data
    resave:false,

    // saveUninitialized: false: Only save sessions that have data in them.
    // saveUninitialized: true: Save all sessions, even if they are empty.
    saveUninitialized:false,
    // express:new Date(Date.now()+60*60*1000),//1hour

    // from express store session

    store:store
}))



// prevent the logout 
// see login route method post
const isAuth=(req,res,next)=>
{
    if(req.session.isAuth)//if true
    {
        next()
    }
    else//if not 
    {
        res.redirect('/login')
    }
}

// and finally implement the above middle ware in dashboard

app.get("/",(req,res)=>
{
    req.session.isAuth=true
    console.log(req.session)
    res.send("hello session tut")
    console.log(req.session.id)
})



// login

app.get('/login',(req,res)=>
{
    res.render('Login')
})


app.post('/login',async(req,res)=>{
    const {username,email,password}=req.body;
    const user= await UserModel.findOne({email})
// if the does not exits

    if(!user)
    {
        return res.redirect('/register')
    }
    // if found
    const is_match=password=== await user.password;
    if(!is_match)
    {
        return res.redirect('/login')
    }
    else{
        // before the redircting the page we have to save some info the login
        req.session.isAuth=true;
        return res.render('Landing')
    }
})



// register

app.get('/register',(req,res)=>
{
    res.render('Register')
})

app.post('/register', async (req,res)=>
{
    const{username,email,password}=req.body
    try
    {
        let user=await UserModel.findOne({email});
    // if user already exist
        if(user)
        {
            // return res.render('/register')
            // window.alert("UserAlreadyExist");
            return res.redirect('/login')
            
        }
    // encrypt password
        const encrypt_pass = await bcrypt.hash(password,12)
        .then(res=>
        {
            console.log("password enctypted")
        }
        )
        .catch(err=>
        {
            console.log(err)
        }
        )
        // new user
        user = new UserModel(
            {
                username,
                email,
                password:password
            }
        );
        await user.save()

        // once the user registerd he can redirect to login page
        res.redirect('/login');
    }catch(err)
    {
        console.log(err)
    }
}
)



app.get('/dashboard',isAuth,(req,res)=>
{
    res.render('Landing')
})

// logout

app.post('/logout',(req,res)=>
{
    req.session.destroy((err)=>
    {
        if(err) throw err;
        res.redirect('/')
    })
})
app.listen(3000,()=>
{
    console.log("running on port 3000")
})