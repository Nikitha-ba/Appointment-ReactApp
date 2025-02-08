import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
  return (
    <div><Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" placeholder="Enter username" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form></div>
  )
}

export default Login