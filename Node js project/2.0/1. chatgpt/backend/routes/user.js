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