const express = require('express')
const router = express.Router()
const staffController = require('../controllers/staffcontrollers')
router.get('/',staffController.getStaff)
router.post('/login', staffController.getLoginuser)
router.post('/register', staffController.registerUser)
router.post('/appointment', staffController.bookAppointment)

module.exports = router