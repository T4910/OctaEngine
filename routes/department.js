const express = require('express');

//! controller functions
const { addDepartment, getDepartment, removeDepartment } = require('../controllers/departmentController');

const router = express.Router();

router.post('/add-department', addDepartment);
router.post('/remove-department', removeDepartment);
router.post('/get-department', getDepartment);

module.exports = router;