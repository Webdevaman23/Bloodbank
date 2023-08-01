const app = require('express').Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { createInventoryController, getInventoryController } = require('../controllers/inventoryController');

// POST || Add inventory;
app.post('/create-inventory', authMiddleware , createInventoryController);

// GET || get all inventory
app.get('/get-inventory' , authMiddleware , getInventoryController)

module.exports = app;