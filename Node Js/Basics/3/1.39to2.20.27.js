const http=require('http')



function RQlistener(request,response)
{
    // routing the website acording to url

    const url=request.url;
    if(url==='/admin')
    {
        response.setHeader('Content-type','text/html');
        response.write('<html>');
        response.write("<head><title>Admin</title></head>")
        response.write('<body><h1>Admin page</h1></body>')
        response.write('</html>')
        return response.end()
        
    }







    console.log(request)



    // sending response
    response.setHeader('Content-type','text/html');
    response.write('<html>');
    response.write("<head><title>Ramana</title></head>")
    response.write('<body><h1>Body from server</h1></body>')
    response.write('</html>')
    response.end()
    
}
const server=http.createServer(RQlistener);

server.listen(3000)