const nodemailer=require('nodemailer')

const transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.SENDING_EMAIL_ADDRESS,
        pass:process.env.SENDING_EMAIL_PASSWORD
    }
})
module.exports=transport