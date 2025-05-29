const fs=require('fs')
const path = require('path')

const os=require("os")

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

fs.writeFileSync("Hello.txt","Hello i am from fs")

const dirname="ramana"
fs.mkdir(dirname,{ recursive: true },(err)=>
{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("created")
    }
})


// Create the file inside the dirctory above created
newFileName="ramanakuamr.txt"
filePath=path.join(dirname,newFileName);
const fileContent="hello i am created using the fs module in node"
fs.writeFile(filePath,fileContent,(err)=>
{
    if (err) {
        return console.error('Error writing file:', err);
    }
    else{
        console.log("created")
    } 
});


// Read the file

fs.readFile(filePath,(err,data)=>
{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log(data.toString())
    }
})


// exit on uncaught errors

process.on('uncaughtException',err=>
{
    console.error(`There is an uncaught error ${err}`)
    process.exit()
}
)