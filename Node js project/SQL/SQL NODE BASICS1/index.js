const express=require('express')

const sql=require('mysql')
const app=express();
// middle for json handling
app.use(express.json());

// Parse URL-encoded bodies (from HTML forms)

app.use(express.urlencoded({ extended: true }));
const cors=require('cors')

app.use(cors())


// body parser
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))

// sql connection
const connection=sql.createConnection({
    // host 
    host:'localhost',
    // username
    user:'root',
    // password
    password:'12345678',
    // database
    database:'SQL_NODE_BASICS1'
})

// connect method have an callback that catch the error
connection.connect((err)=>
{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log('connected to data base')
    }
})


// post

app.post('/post_data',(req,res)=>
{
    // before posting the data define the table
    const name=req.body.name;
    const id=req.body.id;
    const mark=req.body.mark;
    console.log(name)
    // sql insert query

    connection.query('insert into mytable values(?,?,?)',[id,name,mark],(err,result)=>
    {
        // if error 
        if(err)
        {
            console.log(err)
        }
        else{
            res.send({id:req.body.name})
            console.log('post done')
        }
    });
})

// get

app.get('/get_data',(req,res)=>
{
    connection.query('select * from mytable',function(err,result,fields){
            if(err)
            {
                console.log(err)
            }
            else{
                // res.send(res)
                console.log(res);
                res.send(result)
            }
    });
});


app.listen(3000,()=>
{
    console.log("running")
})