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

    // // From the authheaders Method1
    // let authHeader = req.headers["authorization"];

    // if (authHeader && authHeader.startsWith("Bearer ")) {
    //     token = authHeader.split(" ")[1]; // Extract token
    // }


    // From the cookies 
    if(req.cookies && req.cookies.token)
    {
        token=req.cookies.token;
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



// complete work flow


// This code is an **Express.js authentication and authorization middleware** using **JWT (JSON Web Token)** to protect routes and restrict access based on user roles. Let’s break it down step by step.

// ---

// ## **1. Understanding JWT Authentication**
// ### **What is JWT?**
// JWT (JSON Web Token) is a way to securely transmit information between parties as a JSON object. It is commonly used for **authentication** in web applications.

// - **User logs in → Server generates JWT → Sent to client → Client includes JWT in requests**
// - Server verifies JWT before granting access.

// ---

// ## **2. Understanding the Code Structure**
// The code consists of two middleware functions:
// 1. **verifyToken** → Ensures the request has a valid JWT token.
// 2. **checkRole** → Ensures the user has the required role.

// It also defines **three protected routes**:
// - `/admin` → Accessible only by **admin**.
// - `/manager` → Accessible by **admin and manager**.
// - `/user` → Accessible by **admin, manager, and user**.

// ---

// ## **3. Routes Definition**
// These routes define different access levels based on roles.

// ```javascript
// router.get('/admin', verifyToken, checkRole(["admin"]), (req, res) => {
//     res.json({ message: "welcome admin" });
// });
// ```
// - The `/admin` route is **protected**.
// - It requires the request to have a valid **JWT token** (`verifyToken`).
// - It checks if the user **has an "admin" role** (`checkRole(["admin"])`).

// Similarly:
// ```javascript
// router.get('/manager', verifyToken, checkRole(["admin", "manager"]), (req, res) => {
//     res.json({ message: "welcome manager" });
// });
// ```
// - Both **admin and manager** can access.

// ```javascript
// router.get('/user', verifyToken, checkRole(["admin", "manager", "user"]), (req, res) => {
//     console.log(req);
//     res.json({ message: "welcome user" });
// });
// ```
// - **All authenticated users** (admin, manager, user) can access.

// ---

// ## **4. Middleware 1: verifyToken**
// This middleware **extracts and verifies** the JWT token.

// ### **Step-by-step Explanation**
// ```javascript
// const verifyToken = (req, res, next) => {
// ```
// - This function **acts as middleware** and runs before the request reaches the route.

// ```javascript
//     let token;
//     let authHeader = req.headers["authorization"];
// ```
// - It looks for a token in the **request headers** (Authorization header).

// ```javascript
//     if (authHeader && authHeader.startsWith("Bearer ")) {
//         token = authHeader.split(" ")[1]; // Extract token
//     }
// ```
// - If the header exists and starts with `"Bearer "`, it extracts the token.

// ```javascript
//     if (!token) {
//         return res.status(401).json({ message: "Access Denied: No Token Provided" });
//     }
// ```
// - If **no token is found**, it **denies access (401 Unauthorized).**

// ```javascript
//     try {
//         console.log(`Verifying token: ${token}`);
// ```
// - The token is **verified** using the secret key stored in `process.env.JWT_SECRET`.

// ```javascript
//         const verified = jwt.verify(token, process.env.JWT_SECRET);
// ```
// - `jwt.verify()` decodes and verifies the token. It contains user **ID and role**.

// ```javascript
//         req.user = verified;
// ```
// - The user details (ID and role) are stored in `req.user`.

// ```javascript
//         console.log("Verified User Data:", req.user);
//         console.log("User verified successfully ✅");

//         next(); // Proceed to the next middleware
//     }
// ```
// - If the token is valid, the **request continues**.

// ```javascript
//     catch (error) {
//         console.error("JWT Verification Error ❌:", error.message);
//         return res.status(400).json({ message: "Invalid Token", error: error.message });
//     }
// };
// ```
// - If the token is **invalid**, an error message is returned.

// ---

// ## **5. Middleware 2: checkRole**
// This middleware **checks if the user's role is allowed to access the route.**

// ### **Step-by-step Explanation**
// ```javascript
// const checkRole = (requiredRoles) => {
// ```
// - This function **takes an array of allowed roles** (`["admin"]`, `["admin", "manager"]`, etc.).

// ```javascript
//     return (req, res, next) => {
//         if (!req.user || !requiredRoles.includes(req.user.role)) {
// ```
// - If the request **does not have a user** (JWT verification failed) or the **user's role is not in the list**, access is denied.

// ```javascript
//             return res.status(403).json({ message: "Forbidden: Access Denied" });
//         }
// ```
// - Returns `403 Forbidden` if the role does not match.

// ```javascript
//         next();
//     };
// };
// ```
// - If the **user's role is valid**, the request continues.

// ---

// ## **6. How It Works (Flow)**
// 1. **User sends a request** with a token in the headers.
// 2. **verifyToken middleware**:
//    - Extracts the token.
//    - Verifies it using `jwt.verify()`.
//    - If valid, attaches the user data (`req.user`).
//    - If invalid, returns `401 Unauthorized`.
// 3. **checkRole middleware**:
//    - Checks if `req.user.role` is allowed.
//    - If **allowed**, proceeds to the route handler.
//    - If **not allowed**, returns `403 Forbidden`.
// 4. **Route handler sends a response**.

// ---

// ## **7. Example Scenarios**
// ### ✅ **Valid Admin Request**
// Request:
// ```http
// GET /admin
// Authorization: Bearer VALID_ADMIN_TOKEN
// ```
// - Token is verified ✅
// - Role is checked ✅
// - Response:
// ```json
// { "message": "welcome admin" }
// ```

// ### ❌ **Invalid Token**
// Request:
// ```http
// GET /admin
// Authorization: Bearer INVALID_TOKEN
// ```
// Response:
// ```json
// { "message": "Invalid Token" }
// ```

// ### ❌ **Unauthorized Role**
// Request:
// ```http
// GET /admin
// Authorization: Bearer USER_TOKEN
// ```
// Response:
// ```json
// { "message": "Forbidden: Access Denied" }
// ```

// ---

// ## **8. Summary**
// - **JWT is used** for authentication.
// - **Middleware (`verifyToken`) verifies the token** before allowing access.
// - **Middleware (`checkRole`) ensures the user has permission**.
// - **Routes are protected based on roles**.

// ---

// ### **9. How to Improve?**
// - Use `dotenv` to load `JWT_SECRET` safely.
// - Store tokens in `httpOnly` cookies for security.
// - Use a proper error-handling system.

// ---

// This explanation covers **everything from basics to execution flow**. Do you need a **code walkthrough** with debugging tips? 🚀