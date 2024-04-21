const express = require('express');

//! controller functions
const { addTimetable, getTimetable, removeTimetable, makeTimetableCurrent } = require('../controllers/timetableController');

const router = express.Router();

router.post('/add-timetable', addTimetable);
router.post('/remove-timetable', removeTimetable);
router.post('/get-timetable', getTimetable);
router.post('/make-timetable-current', makeTimetableCurrent)

module.exports = router;