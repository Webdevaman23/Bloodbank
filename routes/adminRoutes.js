const { getDonarsListController, getHospitalListController, getOrgListController, deleteDonar } = require('../controllers/adminController');
const adminMiddleware = require('../middlewares/adminMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const app = require('express').Router();

// routes

// GET || Donar List
app.get("/donar-list" , authMiddleware, adminMiddleware , getDonarsListController)

// GET || Hospital List
app.get("/hospital-list" , authMiddleware, adminMiddleware , getHospitalListController)

// GET || ORG List
app.get("/org-list" , authMiddleware, adminMiddleware , getOrgListController)

// ================
app.delete("/delete-donar/:id" , authMiddleware , adminMiddleware , deleteDonar)


// export
module.exports = app