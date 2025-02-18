import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage = () => {
  return (
    <div><h1>HomePage</h1>
    <Container fluid>
      <Row>
        <Col><Button variant="outline-primary">View Appointments</Button></Col>
        <Col><Button variant="outline-primary">View Patient</Button></Col>
        <Col><Button variant="outline-primary">View Staff</Button></Col>
      </Row>
      <Row>
        <Col><Button variant="outline-primary">Book Appointment</Button></Col>
        <Col><Button variant="outline-primary">Add Patient</Button></Col>
        <Col><Button variant="outline-primary">Add Staff</Button></Col>
      </Row>
    </Container>
    </div>
  )
}

export default HomePage