// requesst redirecting 

const http=require('http')

const fs=require('fs');
const { buffer } = require('stream/consumers');
function RQlistener(requesst,response)
{
    const url=requesst.url;
    const method=requesst.method
    if(url==='/')
    {
        response.setHeader('Content-type','text/html')
        response.write('<html>')
        response.write('<head><title>Enter the form data</title></head>')
        response.write('<body><form action="/message" method="POST"> <input type="text" name="email"><input type="submit" value="Send"> </form>')
        return response.end();
    }


    if(url==='/message' && method=='POST')
        {
            const arr_of_user=[]
            requesst.on('data',(chunck)=>{
                arr_of_user.push(chunck)
            })

            requesst.on('end',()=>
            {
                fs.writeFileSync('userdata',joined_data_and_changed_to_string)
                const joined_data_and_changed_to_string=Buffer.concat(arr_of_user)
                console.log(joined_data_and_changed_to_string.toString())
            })
            fs.writeFileSync('file.txt',"DUMMY")
            response.setHeader('Location','/')
            response.statusCode=302;
            return response.end()
        }
}

const server=http.createServer(RQlistener)

server.listen(3000)