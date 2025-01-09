const express = require('express')
const router = express.Router()
const staffController = require('../controllers/staffcontrollers')
router.get('/',staffController.getStaff)

module.exports = router