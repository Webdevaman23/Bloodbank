const { registerController , loginController, currentUserController} = require('../controllers/authcontrollers');
const authMiddleware = require('../middlewares/authMiddleware');
const app = require('express').Router();

// routes 
// register 
app.post('/register' , registerController);

// login
app.post('/login' , loginController);

// currentUserController
app.get('/current=user' , authMiddleware , currentUserController);

// exports
module.exports = app;