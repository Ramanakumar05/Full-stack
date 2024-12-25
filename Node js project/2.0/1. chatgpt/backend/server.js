const express = require('express'); 
const cors = require('cors');

const user=require('./routes/user')
const protected=require('./routes/protectedRouter')
const bodyparser=require('body-parser')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const app=express()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use(bodyparser.json())


mongoose.connect(process.env.MONGO_URI).then(()=>
{
    console.log("connected")
}).catch((e)=>
{
    console.log("not connected"+e);
})

app.use(user)
app.use('/api',protected)


app.listen(6000,()=>
{
    console.log("running")
})









// ram
// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const cors = require('cors');
// require('dotenv').config();

// const User = require('./model/User');

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected')).catch((err) => console.error('MongoDB connection error:', err));

// // Register Route
// app.post('/register', async (req, res) => {
//   const { username, password, role } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ username, password: hashedPassword, role });
//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(400).json({ error: 'Username already exists or invalid input' });
//   }
// });

// // Login Route
// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const user = await User.findOne({ username });
//     if (!user) return res.status(404).json({ error: 'User not found' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

//     const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Middleware to check authentication
// const authMiddleware = (req, res, next) => {
//   const token = req.header('Authorization');
//   if (!token) return res.status(401).json({ error: 'No token, authorization denied' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch {
//     res.status(401).json({ error: 'Token is not valid or expired' });
//   }
// };

// // Middleware to check roles
// const roleMiddleware = (roles) => (req, res, next) => {
//   if (!roles.includes(req.user.role)) {
//     return res.status(403).json({ error: 'Access denied' });
//   }
//   next();
// };

// // Protected Routes
// app.get('/user-content', authMiddleware, roleMiddleware(['user', 'admin']), (req, res) => {
//   res.json({ message: 'Welcome to the user content area!' });
// });

// app.get('/admin-content', authMiddleware, roleMiddleware(['admin']), (req, res) => {
//   res.json({ message: 'Welcome to the admin content area!' });
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
