const express=require('express')
const authenticatemiddleware=require('../middleware/Auth')
const rolemiddleware=require('../middleware/checkroles')


const route=express.Router()

route.get('/user-content', authenticatemiddleware, rolemiddleware(['user', 'admin']), (req, res) => {
    res.json({ message: 'Welcome to the user content area!' });
});

route.get('/admin-content', authenticatemiddleware, rolemiddleware(['admin']), (req, res) => {
    res.json({ message: 'Welcome to the admin content area!' });
});

module.exports = route;