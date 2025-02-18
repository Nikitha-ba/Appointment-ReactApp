const pool = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

const getLoginuser = async(user, pass) => {
    try{
        if (user == "" || pass == "")
        {
            throw new Error("User or password can not be null")
        }
        const result = await pool.query(`select * from staff where username = '${user}'`)
        console.log('result',result)
        const userdata = result.rows[0]
        const match = await bcrypt.compare(pass, userdata.password)
        if (!match) {
            throw new Error("Invalid credentials")
        }
        const token = jwt.sign({user:user}, process.env.JWT_SECRET, {expiresIn:"1h"}) 
        return token
    }
    catch(error){
        //console.log(error)
        throw error
    }
    
}

const registerUser = async(firstname, lastname, designation, gender, address, phone, salary, user, pass) => {
    try{
        const result = await pool.query(`select * from staff where username = '${user}'`)
        console.log('result',result)
        if (result.rows.length > 0) {
            throw new Error("User Already exist")
        }

        if (firstname == "" || lastname == "" || designation =="" || gender =="" || address == "" || phone == "" || salary == "" || user == "" || pass == "")
        {
            throw new Error("All fields required")
        }
        const hashedpass = await bcrypt.hash(pass, 10)
        const result1 = await pool.query(`insert into staff (firstname, lastname, designation, gender, address, phone, salary, username, password) values ('${firstname}', '${lastname}', '${designation}', '${gender}','${address}','${phone}', '${salary}', '${user}', '${hashedpass}')`)
        console.log('result',result1)
        return user
    }
    catch(error){
        console.log(error)
        throw error
    }
    
}

const bookAppointment = async(pid, sid, apt_dt) => {
    try{
        const result = await pool.query(`select * from appointment where pid = '${pid}'and sid = '${sid}' and apt_dt = '${apt_dt}'`)
        console.log('result',result)
        if (result.rows.length > 0) {
            throw new Error("Appointment already booked")
        }

        if (pid == "" || sid == "" || apt_dt =="")
        {
            throw new Error("All fields required")
        }
        const result1 = await pool.query(`insert into appointment (pid, sid, apt_dt) values ('${pid}', '${sid}', '${apt_dt}')`)
        console.log('result',result1)
        return result1.rows[0]
    }
    catch(error){
        console.log(error)
        throw error
    }
    
}

module.exports = {getStaff, getLoginuser, registerUser, bookAppointment}