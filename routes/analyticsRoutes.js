const app = require('express').Router();
const { bloodGroupDetailsController } = require('../controllers/analyticsController');
const authMiddleware = require('../middlewares/authMiddleware');

// GET || get blood data
app.get('/bloodGroups-data' , authMiddleware , bloodGroupDetailsController)



module.exports = app;