const express = require('express')

//! controller functions
const { loginUser, createUser, getUser } = require('../controllers/userController')

const router = express.Router()

router.post('/login', loginUser)
router.post('/create-user', createUser)
router.get('/get-user', getUser)

module.exports = router