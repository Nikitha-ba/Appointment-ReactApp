import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'

const ViewStaff = () => {
  const [staffData, setStaffData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  
  useEffect(() => {

    const fetchStaffData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/staff")
      if (response?.data?.length>0)
      {
        console.log(response.data)
        setStaffData(response.data)
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
    fetchStaffData()
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
            <th scope="col">Staff ID</th>
            <th scope="col">Staff Name</th>
            <th scope="col">Designation</th>
            <th scope="col">Gender</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody>
          {
            staffData.map(
              staff =>
                <tr key={staff?.sid}>
                  <td>{staff?.sid}</td>
                  <td>{staff?.firstname} {staff?.lastname}</td>
                  <td>{staff?.designation}</td>
                  <td>{staff?.gender}</td>
                  <td>{staff?.address}</td>
                  <td>{staff?.phone}</td>
                  <td>{staff?.salary}</td>
                </tr>
            )
          }
        </tbody>
      </table>:<span>{error}</span>}
    </div>
  )
}

export default ViewStaff