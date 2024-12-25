const nodemailer=require('nodemailer')

const tranporter=nodemailer.createTransport({
    service:'gmail',
    host:"smtp.gmail.com",
    auth:{
        user:"ramana.041005@gmail.com",
        pass:"myop muai jtfk fxlu"
    }
})


module.exports=tranporter