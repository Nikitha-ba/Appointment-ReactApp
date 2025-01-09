const pool = require('../db')

const getStaff = async() => {
    try{
        const result = await pool.query('select * from staff;')
        console.log('result',result)
        return result.rows
    }
    catch(error){
        console.log(error)
    }
    
}

module.exports = {getStaff}