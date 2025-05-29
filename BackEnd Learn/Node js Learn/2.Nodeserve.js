const { error } = require('console')
const fs=require('fs')



const http= require('http')

const app=http.createServer((req,res)=>
{
    res.writeHead(200,{'Content-Type':'text/html'})
    fs.readFile('index.html',(error,data)=>{
        if(error)
        {
            console.log("Error")
            res.write("Error")
            res.statusCode(404)
        }
        else{
            res.write("hello")
            res.write(data)
        }
    })
    res.end()
})


app.listen(3000,(err)=>
{
    console.log(err)
})