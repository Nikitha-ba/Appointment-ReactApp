import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'

const ViewPatient = () => {
  const [patientData, setPatientData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {

    const fetchPatientData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/staff/getpat")
      if (response?.data?.length>0)
      {
        console.log(response.data)
        setPatientData(response.data)
        setLoading(false)
        setError("")
      }
      else
      {
        setError("Something went wrong..!!!")
      }
      } catch (error) {
        setError("Something went wrong..!!!")
      }
      setLoading(false)
    }
    fetchPatientData()
  }, [])
  
  return (
    <div>
      {loading?<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>:
    error == ""?
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Patient ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">DOB</th>
            <th scope="col">Gender</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {
            patientData.map(
              patient =>
                <tr key={patient?.pid}>
                  <td>{patient?.pid}</td>
                  <td>{patient?.firstname} </td>
                  <td>{patient?.lastname}</td>
                  <td>{patient?.dob}</td>
                  <td>{patient?.gender}</td>
                  <td>{patient?.address}</td>
                  <td>{patient?.phone}</td>
                </tr>
            )
          }
        </tbody>
      </table>:<span>{error}</span>}
    </div>
  )
}

export default ViewPatient