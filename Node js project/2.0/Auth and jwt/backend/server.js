const express=require('express')

const app=express()


app.get('/',(req,res)=>
{
    console.log("ramana");
    console.log()
    res.send("ramanakumar")
})

app.listen(5000,(e)=>
{
    console.log(e)
})
