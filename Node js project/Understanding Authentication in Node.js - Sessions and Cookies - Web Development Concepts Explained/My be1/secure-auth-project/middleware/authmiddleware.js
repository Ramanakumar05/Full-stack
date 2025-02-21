const jwt=require('jsonwebtoken')


// wrong code

// const verifyToken = (req, res, next) => {
//     // const token = req.cookies.token;  // Retrieving token from cookies

//     let token;
//     // console.log(req.headers['authorization']);
//     // token=req.headers['authorization'];  // Retrieving token from cookies4

//     let authheader=req.headers["authorization"]

//     if(authheader && authheader.startsWith("Bearer"))
//     {
//         token=authheader.split(" ")[1];
//     }
//     console.log("from auth-mid "+token)

//     if (!token) {
//         return res.status(401).json({ message: "Access Denied" });
//     }

//     try {
        
//         console.log(`from authmiddleware
//                     Secret
//                     ${process.env.JWT_SECRET}
//                     Token
//                     ${token}
//             `)
//         console.log(`Verifying Token: ${token}`)

//         const verified = jwt.verify(token, process.env.JWT_SECRET); // Verifying the token
//         req.user = verified; // Storing user info in request

//         console.log(req.user)
//         console.log("verified")
//         next(); // Proceeding to next middleware or route
//     } catch (error) {
//         res.status(400).json({ message: "Invalid Token" });
//     }
// };


// corrected code


const verifyToken = (req, res, next) => {
    let token;
    let authHeader = req.headers["authorization"];

    if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1]; // Extract token
    }

    if (!token) {
        return res.status(401).json({ message: "Access Denied: No Token Provided" });
    }

    try {
        console.log(`Verifying token: ${token}`);

        // Verify the token using the secret key
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        //verified stores the user details (id and role)

        // Attach user details to the request object
        req.user = verified;

        console.log("Verified User Data:", req.user);
        console.log("User verified successfully ✅");

        next(); // Proceed to the next middleware checkrole
    } catch (error) {
        console.error("JWT Verification Error ❌:", error.message);

        // Return response and ensure no further execution
        return res.status(400).json({ message: "Invalid Token", error: error.message });
    }
};


// middleware for verity the jwt token
const checkRole = (requiredroles) => {
    return (req, res, next) => {
        if (!req.user || !requiredroles.includes(req.user.role)) {
            return res.status(403).json({ message: "Forbidden: Access Denied" });
        }
        next();
    };
};

// process
// 1>The ...allowedRoles collects all provided roles into an array.
// 2>allowedRoles.includes(req.user.role) checks if the user's role is in the list.
// 3>If role matches, it proceeds; if not, it denies access.

module.exports = { verifyToken, checkRole };
