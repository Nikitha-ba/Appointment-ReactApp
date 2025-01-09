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

module.exports = {getStaff}