const jwt=require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    // const token = req.cookies.token;  // Retrieving token from cookies



    let token;
    let authheader=req.headers.Authorization;  // Retrieving token from cookies
    if(authheader && authheader.startsWith("Bearer"))
    {
        token=authheader.split(" ")[1];
    }
    console.log(token)

    if (!token) {
        return res.status(401).json({ message: "Access Denied" });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET); // Verifying the token
        req.user = verified; // Storing user info in request
        console.log(req.user)
        next(); // Proceeding to next middleware or route
    } catch (error) {
        res.status(400).json({ message: "Invalid Token" });
    }
};


// middleware for verity the jwt token
const isAdmin=(req,res,next)=>
{
    if(req.user.role!=="admin")
    {
        return res.status(403).json({message:"Forbidden: Admins only"})
    }
    next()
}
module.exports = { verifyToken, isAdmin };
