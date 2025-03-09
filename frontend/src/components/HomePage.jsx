import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import ViewAppointment from "./ViewAppointment";
import ViewStaff from "./ViewStaff";
import ViewPatient from "./ViewPatient";

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState("")
  const navigateBookAppointment = () => {
    navigate("/appointment")
  }
  const navigateAddPatient = () => {
    navigate("/patient")
  }
  const navigateAddStaff = () => {
    navigate("/staff")
  }
    return (
      <div className="text-center">
        <h1 className="my-4">HomePage</h1>
        <Container fluid>
          <Row className="text-center my-3">
            <Col md={4} className="d-grid gap-2">
              <Button variant="outline-primary" onClick={() => setSelectedPage("va")}>View Appointments</Button>
            </Col>
            <Col md={4} className="d-grid gap-2">
              <Button variant="outline-primary" onClick={() => setSelectedPage("vp")}>View Patient</Button>
            </Col>
            <Col md={4} className="d-grid gap-2">
              <Button variant="outline-primary" onClick={() => setSelectedPage("vs")}>View Staff</Button>
            </Col>
          </Row>

          <Row className="text-center my-3">
            <Col md={4} className="d-grid gap-2">
              <Button variant="outline-primary" onClick={navigateBookAppointment}>Book Appointment</Button>
            </Col>
            <Col md={4} className="d-grid gap-2">
              <Button variant="outline-primary" onClick={navigateAddPatient}>Add Patient</Button>
            </Col>
            <Col md={4} className="d-grid gap-2">
              <Button variant="outline-primary" onClick={navigateAddStaff}>Add Staff</Button>
            </Col>
          </Row>
          {
            selectedPage == "va" && <ViewAppointment />
          }
          {
            selectedPage == "vs" && <ViewStaff />
          }
          {
            selectedPage == "vp" && <ViewPatient/>
          }
        </Container>
      </div>
    );
};

export default HomePage;
