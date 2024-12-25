const jwt = require('jsonwebtoken');



const authMiddleware=(req,res,next)=>
{
    const token=req.header('Authorization')
    console.log(token)
    if(!token)
    {
        return res.status(401).json({ message: "NO TOKEN PROVIDED" });
    }

    try{
        if (token.startsWith('Bearer ')) {
            token = token.split(' ')[1];
    } 
    else {
      return res.status(401).json({ message: "INVALID TOKEN FORMAT" });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user info to the request object
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();    
    }
    catch(error)
    {
        res.status(401).json({message:"NOT AUTHORIZED"})
    }
}

module.exports=authMiddleware