const express=require('express')
const route=express.Router();
const bycrypt=require('bcryptjs');
const User = require('../model/User');
const jwt =require('jsonwebtoken')
const user=require('../model/User')

route.get('/get',async(req,res)=>
{
    const users=await user.find()
    res.json(users)
})
route.post('/register', async (req, res) => {
  const { username, password, role } = req.body;

  // Validate input
  if (!username || !password || !['user', 'admin'].includes(role)) {
    return res.status(400).json({ error: 'Invalid input: Please provide a valid username, password, and role.' });
  }

  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists. Please choose a different username.' });
    }

    // Hash the password
    const hashedPassword = await bycrypt.hash(password, 10);

    // Save the new user
    const newUser = new User({ username, password: hashedPassword, role });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error in /register route:', error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});


route.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Validate input
  if (!username || !password) {
    return res.status(400).json({ error: 'Invalid input: Please provide both username and password.' });
  }

  try {
    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'User not found. Please register first.' });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bycrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials. Please check your username and password.' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Respond with the token
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error in /login route:', error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});


module.exports=route;






// JWT


// ### `jwt.sign(payload, secretOrPrivateKey, [options], [callback])`

// 1. **Payload** (`payload`):
//    - **Type**: Object | Buffer | string
//    - **Purpose**: This is the data you want to encode into the JWT. It usually contains user information and any claims you want to include in the token.
//    - **Example**:
//      ```javascript
//      const payload = { id: user._id, username: user.username, role: user.role };
//      ```

// 2. **Secret or Private Key** (`secretOrPrivateKey`):
//    - **Type**: string | Buffer | object
//    - **Purpose**: This is the secret key used to sign the token. It ensures that the token cannot be altered without the server's knowledge. For HMAC algorithms, it's a string or Buffer. For RSA and ECDSA, it's an object that includes the private key.
//    - **Example**:
//      ```javascript
//      const secretKey = process.env.JWT_SECRET;
//      ```

// 3. **Options** (`options`) (optional):
//    - **Type**: Object
//    - **Purpose**: Additional settings for the token, such as expiration time, audience, issuer, and more.
//    - **Example**:
//      ```javascript
//      const options = {
//          expiresIn: '1h', // Token expiration time
//          audience: 'http://myapp.com', // Intended recipient of the token
//          issuer: 'myapp' // Issuer of the token
//      };
//      ```

// 4. **Callback** (`callback`) (optional):
//    - **Type**: Function
//    - **Purpose**: An optional callback function that receives the generated token. If provided, the `jwt.sign` method works asynchronously. If not, it works synchronously and returns the token directly.
//    - **Example**:
//      ```javascript
//      const callback = (err, token) => {
//          if (err) {
//              console.error('Error generating token', err);
//          } else {
//              console.log('Generated token:', token);
//          }
//      };
//      ```

// ### Example Usage

// Here's a complete example of using `jwt.sign` to create a JWT:

// ```javascript
// const jwt = require('jsonwebtoken');

// // User information to be encoded in the token
// const user = {
//     _id: '60d0fe4f5311236168a109ca',
//     username: 'johndoe',
//     role: 'user'
// };

// // Create the payload
// const payload = { id: user._id, username: user.username, role: user.role };

// // Secret key used for signing the token
// const secretKey = process.env.JWT_SECRET;

// // Options for the token
// const options = {
//     expiresIn: '1h', // Token will expire in 1 hour
//     audience: 'http://myapp.com', // Audience
//     issuer: 'myapp' // Issuer
// };

// // Generate the token synchronously
// const token = jwt.sign(payload, secretKey, options);
// console.log('Generated token:', token);

// // Or generate the token asynchronously with a callback
// jwt.sign(payload, secretKey, options, (err, token) => {
//     if (err) {
//         console.error('Error generating token', err);
//     } else {
//         console.log('Generated token:', token);
//     }
// });
// ```

// ### Summary

// - **Payload**: Contains the data you want to encode in the token (e.g., user info).
// - **Secret or Private Key**: Used to sign the token to ensure its integrity.
// - **Options**: Optional settings like expiration time, audience, and issuer.
// - **Callback**: Optional function for asynchronous token generation.

// This should give you a clear understanding of how to use `jwt.sign` and what each parameter is for. Let me know if you have any more questions or need further clarification! 😊✨