const app = require('express').Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { createInventoryController } = require('../controllers/inventoryController');

// POST || Add inventory;
app.post('/create-inventory', authMiddleware , createInventoryController);

module.exports = app;