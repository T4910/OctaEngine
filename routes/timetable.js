const express = require('express');

//! controller functions
const { addTimetable, getTimetable, removeTimetable } = require('../controllers/timetableController');

const router = express.Router();

router.post('/add-timetable', addTimetable);
router.post('/remove-timetable', removeTimetable);
router.post('/get-timetable', getTimetable);

module.exports = router;