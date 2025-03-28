import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios"; // Ensure axios is imported
import { setHours, setMinutes } from "date-fns";

const Appointment = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [patientId, setPatientId] = useState("");
  const [staffId, setStaffId] = useState("");
  const [time, setTime] = useState(null);
  const [aptDateTime, setAptDateTime] = useState("");

  const getFormattedDateTime = () => {
    if (!selectedDate || time === null) return "";

    // Convert time from seconds to "HH:mm"
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
    const formattedDate = new Date(selectedDate).toLocaleDateString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).replace(/-/g, "/");

    setAptDateTime(`${formattedDate} ${formattedTime}`);
  };


  const bookAppointmentHandler = async (e) => {
    e.preventDefault();
    console.log(selectedDate, time, "abcd");
    getFormattedDateTime()
    const payload = {
      pid: patientId,
      sid: staffId,
      apt_dt: aptDateTime
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/staff/appointment",
        payload
      );
      if (response.data.success) {
        navigate("/");
      } else {
        console.error("Appointment already exists");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Form onSubmit={bookAppointmentHandler}>
        <Form.Group className="mb-3" controlId="formBasicPid">
          <Form.Label>Patient ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Patient ID"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSid">
          <Form.Label>Staff ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Staff ID"
            value={staffId}
            onChange={(e) => setStaffId(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDateTime">
          <Form.Label>Appointment Date and Time</Form.Label>
          <div className="d-flex gap-3">
            <DatePicker
              dateFormat="MM/dd/yyyy"
              showYearDropdown
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="form-control me-3"
              placeholderText="Select Date"
              minDate={new Date()}
            />
            <DatePicker
              placeholderText="Select Time"
              selected={time}
              className="form-control me-3"
              onChange={(time) => setTime(time)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              minTime={new Date()}
              maxTime={setHours(setMinutes(new Date(), 30), 21)}
            />
          </div>
        </Form.Group>
        <div className="d-flex gap-2 justify-content-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>

          <Button variant="secondary" onClick={()=>navigate("/")}>
            Back
          </Button>
        </div>
        </Form>
    </div>
  );
};

export default Appointment;
