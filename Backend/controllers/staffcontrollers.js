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
        const {firstname, lastname, gender, address, phone, user, pass} = req.body
        const userName = await StaffService.registerUser(firstname, lastname, gender, address, phone, user, pass)
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



module.exports = {getStaff, getLoginuser, registerUser}