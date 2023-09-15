const app = require('express').Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { createInventoryController, getInventoryController, getDonarsControllers , getHospitalController, gerOrganisationController } = require('../controllers/inventoryController');

// POST || Add inventory;
app.post('/create-inventory', authMiddleware , createInventoryController);

// GET || get all inventory
app.get('/get-inventory' , authMiddleware , getInventoryController)

// GET || get donars records
app.get('/get-donars' , authMiddleware , getDonarsControllers)

// GET || get hospital records
app.get('/get-hospitals' , authMiddleware , getHospitalController)

// GET || get organisation profiles
app.get('/get-organisations' , authMiddleware , gerOrganisationController)



module.exports = app;