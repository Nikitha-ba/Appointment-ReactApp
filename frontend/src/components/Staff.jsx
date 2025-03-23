import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Staff = () => {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [designation, setDesignation] = useState("")
  const [gender, setGender] = useState("")
  const [address, setaddress] = useState("")
  const [phone, setPhone] = useState("")
  const [salary, setSalary] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const loginHandler = async (e) => 
    {
      e.preventDefault()
      const payload = {
        firstname: firstname,
        lastname: lastname,
        designation: designation,
        gender: gender,
        address: address,
        phone: phone,
        salary: salary,
        user: username,
        pass: password
      }
      try {
        const response = await axios.post("http://localhost:3001/staff/register", payload)
        if (response.data.success)
        {
          navigate("/")
        }
        else{
          console.error("Wrong Credentials")
        }
      } catch (error) {
        console.error(error);
      }
    }

    return (
      <div><Form onSubmit={loginHandler}>
      <Form.Group className="mb-3" controlId="formBasicFirstname">
        <Form.Label>Firstname</Form.Label>
        <Form.Control type="text" placeholder="Enter Firstname" value = {firstname} onChange={(e)=>setFirstname(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastname">
        <Form.Label>Lastname</Form.Label>
        <Form.Control type="text" placeholder="Enter Lastname" value = {lastname} onChange={(e)=>setLastname(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDesignation">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter Designation" value = {designation} onChange={(e)=>setDesignation(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicGender">
        <Form.Label>Gender</Form.Label>
        <Form.Control type="text" placeholder="Enter Gender" value = {gender} onChange={(e)=>setGender(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter Address" value = {address} onChange={(e)=>setaddress(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter Phone" value = {phone} onChange={(e)=>setPhone(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicSalary">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Salary" value = {salary} onChange={(e)=>setSalary(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value = {username} onChange={(e)=>setUsername(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value = {password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <div className="d-flex gap-2 justify-content-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>

          <Button variant="secondary" onClick={()=>navigate("/")}>
            Back
          </Button>
        </div>
    </Form></div>
  )
}

export default Staff