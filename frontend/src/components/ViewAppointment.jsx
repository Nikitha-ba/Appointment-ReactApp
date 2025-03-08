import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'

const ViewAppointment = () => {
  const [aptData, setAptData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    
    useEffect(() => {
      const fetchAptData = async () => {
        try {
          const response = await axios.get("http://localhost:3000/staff/getApt")
          if (response?.data?.length > 0) {
            console.log(response.data)
            setAptData(response.data)
            setLoading(false)
            setError("")
          }
          else {
            setError("Something went wrong..!!!")
          }
        } catch (error) {
          setError("Something went wrong..!!!")
        }
        setLoading(false)
      }
      fetchAptData()
    }, [])

  return (
    <div>
      {loading?<Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>:
    error == ""?
      <table className="table">
            <thead>
              <tr>
                <th scope="col">Appointment ID</th>
                <th scope="col">Patient Name</th>
                <th scope="col">Staff Name</th>
                <th scope="col">Time and Date</th>
              </tr>
            </thead>
            <tbody>
              {
                aptData.map(
                  apt =>
                    <tr key={apt?.aid}>
                      <td>{apt?.aid}</td>
                      <td>{apt?.pid}</td>
                      <td>{apt?.sid}</td>
                      <td>{apt?.apt_dt}</td>
                    </tr>
                )
              }
            </tbody>
          </table> : <span>{error}</span>}
    </div>
  )
}

export default ViewAppointment