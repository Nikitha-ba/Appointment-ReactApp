import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-bootstrap-time-picker";
import axios from "axios"; // Ensure axios is imported

const Patient = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [dob, setdob] = useState("");
  const [gender, setGender] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")

  const getFormattedDate = () => {
    if (!selectedDate) return "";

    const formattedDate = new Date(selectedDate).toLocaleDateString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).replace(/-/g, "/");

    setdob(`${formattedDate}`);
  };

  const addPatientHandler = async (e) => {
    e.preventDefault();
    getFormattedDate()
    const payload = {
      firstname: firstname,
      lastname: lastname,
      dob: dob,
      gender: gender,
      address: address,
      phone: phone
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/staff/patientDetails",
        payload
      );
      if (response.data.success) {
        navigate("/");
      } else {
        console.error("Patient already exists");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Form onSubmit={addPatientHandler}>
        <Form.Group className="mb-3" controlId="formBasicPid">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSid">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDateTime">
          <Form.Label>Date of Birth</Form.Label>
          <div className="d-flex gap-3">
            <DatePicker
              dateFormat="MM/dd/yyyy"
              showYearDropdown
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="form-control me-3"
              placeholderText="Select Date"
              maxDate={new Date()}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSid">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSid">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSid">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Patient;
