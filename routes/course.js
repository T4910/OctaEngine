const express = require('express');

//! controller functions
const { addCourse, removeCourse, getCourse } = require('../controllers/courseController');

const router = express.Router();

router.post('/add-course', addCourse);
router.post('/remove-course', removeCourse);
router.post('/get-course', getCourse);

module.exports = router;