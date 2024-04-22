const express = require('express')

//! controller functions
const { addVenue, getVenue, removeVenue } = require('../controllers/venueController')

const router = express.Router()

router.post('/add-venue', addVenue)
router.post('/remove-venue', removeVenue)
router.post('/get-venue', getVenue)

module.exports = router