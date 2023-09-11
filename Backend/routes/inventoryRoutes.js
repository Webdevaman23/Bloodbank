const app = require('express').Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { createInventoryController, getInventoryController, getDonarsControllers } = require('../controllers/inventoryController');

// POST || Add inventory;
app.post('/create-inventory', authMiddleware , createInventoryController);

// GET || get all inventory
app.get('/get-inventory' , authMiddleware , getInventoryController)

// GET || get all inventory
app.get('/get-donars' , authMiddleware , getDonarsControllers)



module.exports = app;