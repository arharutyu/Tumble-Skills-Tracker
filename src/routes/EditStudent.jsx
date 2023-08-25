import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { get, put } from '../api/api'
import { STUDENTS } from '../api/endpoints'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const EditStudent = ({isAdmin}) => {
  const [student, setStudent] = useState([])
  const [update, setUpdate] = useState({})

  const nav = useNavigate()

  // Extract student ID from URL parameters
  const studentId = useParams()

  useEffect(() => {
    (async () => {
      // Fetch student data from the server using the student ID
      const endpoint = `${STUDENTS}/${studentId.id}`
      const res = await get(endpoint)
      setStudent(res)
      })()
    }, [])
  
    // Handle change for Date of Birth input
    const handleDOBChange = (event) => {
      setUpdate({ ...update, DOB: event.target.value })
    }

    // Format date for date input
    const formatDateForInput = (dateString) => {
      const date = new Date(dateString);
      const formattedDate = date.toISOString().split('T')[0];
      return formattedDate;
    }

    // Handle change for Name input
    const handleNameChange = (event) => {
      setUpdate({ ...update, name: event.target.value });
    }

     // Handle form submission
    const submit = async (event) => {
      event.preventDefault()
      if (update.name !== student.name) {
        // Update only if the name has changed
        setUpdate({ ...update, name: event.target.name.value });
      }
      // Send PUT request to update student data
      await put(`${STUDENTS}/${studentId.id}`, update)
      console.log('PUT request done')
      // Navigate to student's details page
      nav(`/students/${studentId.id}`)
    }
    
    return (
    <>
    <Container className="contcontainer">
    {isAdmin ? (<>
    <h1>Update Student</h1>
    <Form onSubmit={submit}>
      <Form.Control
        type="text"
        placeholder={student._id}
        readOnly
      />
      <Form.Control id="name" type="text" placeholder={student.name} onChange={handleNameChange} />
      <Form.Control 
      type="date" 
      id="DOB"
      value={update.DOB || (student.DOB ? formatDateForInput(student.DOB) : '')}
      onChange={handleDOBChange}
      />
      <Button variant="primary" type="submit">Submit</Button></Form>
      </>) : (
        <h3>You must be an admin to access this resource.</h3>
      )}
      </Container>
    </>
  )
}

export default EditStudent