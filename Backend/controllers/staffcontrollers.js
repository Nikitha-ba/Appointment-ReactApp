const StaffService = require('../services/staffservices')

const getStaff = async(req, res) => {
    try {
        const data = await StaffService.getStaff()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({error:'failed to respond'})
        console.log(error)
    }
}

const getApt = async(req, res) => {
    try {
        const data = await StaffService.getApt()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({error:'failed to respond'})
        console.log(error)
    }
}

const getPat = async(req, res) => {
    try {
        const data = await StaffService.getPat()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({error:'failed to respond'})
        console.log(error)
    }
}

const getLoginuser = async(req, res) => {
    try {
        const {user, pass} = req.body
        const token = await StaffService.getLoginuser(user, pass)
        const response = {
            success:true,
            message:'Login Successful..!',
            token
        }
        res.status(200).cookie('Authorization', 'Bearer '+token).json(response)

    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message, success:false})
    }
}
const registerUser = async(req, res) => {
    try {
        const {firstname, lastname, designation, gender, address, phone, salary, user, pass} = req.body
        const userName = await StaffService.registerUser(firstname, lastname,designation, gender, address, phone, salary, user, pass)
        const response = {
            success:true,
            message:'Registration Successful..!',
            userName

        }
        res.status(201).json(response)

    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
}

const bookAppointment = async(req, res) => {
    try {
        const {pid, sid, apt_dt} = req.body
        const apt = await StaffService.bookAppointment(pid, sid, apt_dt)
        const response = {
            success:true,
            message:'Appointment booked successfully..!',
            apt

        }
        res.status(201).json(response)

    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message})
    }
}



module.exports = {getStaff, getApt, getPat, getLoginuser, registerUser, bookAppointment}