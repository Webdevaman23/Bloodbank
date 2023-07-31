const { registerController , loginController} = require('../controllers/authcontrollers');
const app = require('express').Router();

// routes 
// register 
app.post('/register' , registerController);

// login
app.post('/login' , loginController);


// exports
module.exports = app;