import React, { useState } from 'react'
import DatePicker from "react-datepicker"
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Appointment = () => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(null)
    const [patientId, setPatientId] = useState("")
    const [staffId, setStaffId] = useState("")
  return (
    <div><Form>
    <Form.Group className="mb-3" controlId="formBasicPid">
      <Form.Label>Patient ID</Form.Label>
      <Form.Control type="text" placeholder="Enter Patient ID" value = {patientId} onChange={(e)=>setPatientId(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicSid">
      <Form.Label>Staff ID</Form.Label>
      <Form.Control type="text" placeholder="Enter Staff ID" value = {staffId} onChange={(e)=>setStaffId(e.target.value)}/>
    </Form.Group>
    <Form.Group>
      <DatePicker className="form-control" dateFormat="MM/dd/yyyy" showYearDropdown={true} id="example-datepicker" selected={selectedDate} onChange={(date)=>setSelectedDate(date)} />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form></div>
  )
}

export default Appointment