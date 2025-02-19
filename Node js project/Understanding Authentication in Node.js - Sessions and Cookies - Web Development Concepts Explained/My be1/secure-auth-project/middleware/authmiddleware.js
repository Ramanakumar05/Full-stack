const jwt=require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    // const token = req.cookies.token;  // Retrieving token from cookies

    let token;
    // console.log(req.headers['authorization']);
    // token=req.headers['authorization'];  // Retrieving token from cookies4

    let authheader=req.headers['authorization']

    if(authheader && authheader.startsWith("Bearer"))
    {
        token=authheader.split(" ")[1];
    }
    console.log("from authmid "+token)

    if (!token) {
        return res.status(401).json({ message: "Access Denied" });
    }

    try {
        console.log(`from authmiddleware
                    Secret
                    ${process.env.JWT_SECRET}
                    Token
                    ${token}
            `)
        const verified = jwt.verify(token, process.env.JWT_SECRET); // Verifying the token
        req.user = verified; // Storing user info in request
        console.log(req.user)
        next(); // Proceeding to next middleware or route
    } catch (error) {
        res.status(400).json({ message: "Invalid Token" });
        next();
    }
};


// middleware for verity the jwt token
const checkRole = (roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Forbidden: Access Denied" });
        }
        next();
    };
};



module.exports = { verifyToken, checkRole };
