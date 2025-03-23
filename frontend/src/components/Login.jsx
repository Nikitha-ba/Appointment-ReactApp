import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const loginHandler = async (e) => 
  {
    e.preventDefault()
    const payload = {
      user: username,
      pass: password
    }
    try {
      const response = await axios.post("http://localhost:3001/staff/login", payload)
      if (response.data.success)
      {
        localStorage.setItem("userToken",response.data.token)
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
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" placeholder="Enter username" value = {username} onChange={(e)=>setUsername(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" value = {password} onChange={(e)=>setPassword(e.target.value)}/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form></div>
  )
}


export default Login