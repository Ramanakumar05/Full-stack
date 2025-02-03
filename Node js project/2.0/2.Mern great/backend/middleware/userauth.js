// find the token and give the user id

const jwt=require('jsonwebtoken')

const userAuth=async(res,req,next)=>
{
    const {token}=req.cookies;

    if(!token)
    {
        res.json({mesage:"token not found"})
    }
    try{
        const decode=jwt.verify(token,process.env.jwt);
        if(decode.id)
        {
            req.body.userId=decode;
        }
        else{
            return res.json({message:"not authorized"})
        }
        next();
    }catch(error)
    {
        res.json({message:error.mesage})
    }
}

module.exports=userAuth