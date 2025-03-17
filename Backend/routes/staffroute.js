const express = require('express')
const router = express.Router()
const staffController = require('../controllers/staffcontrollers')
router.get('/',staffController.getStaff)
router.get('/getApt',staffController.getApt)
router.get('/getpat',staffController.getPat)
router.post('/login', staffController.getLoginuser)
router.post('/register', staffController.registerUser)
router.post('/appointment', staffController.bookAppointment)
router.post('/patientDetails', staffController.patientDetails)

module.exports = router