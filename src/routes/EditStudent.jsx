import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { get, put } from '../api/api'
import { STUDENTS } from '../api/endpoints'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'

const EditStudent = ({isAdmin, accessToken}) => {
  const [student, setStudent] = useState([])
  const [update, setUpdate] = useState({})
  const [level, setLevel] = useState('')
  const [formattedDOB, setFormattedDOB] = useState('')

  const nav = useNavigate()

  // Extract student ID from URL parameters
  const studentId = useParams()

  useEffect(() => {
    (async () => {
      // Fetch student data from the server using the student ID
      const endpoint = `${STUDENTS}/${studentId.id}`
      const res = await get(endpoint, accessToken)
      setStudent(res)
      setUpdate(res)
      setLevel(res.skillLevel)
      if (res.DOB) {
        setFormattedDOB(formatDateForInput(res.DOB))
      }
      })()
    }, [])
  
    // Handle change for Date of Birth input
    const handleDOBChange = (event) => {
      setFormattedDOB(formatDateForInput(event.target.value))
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
      const updatedStudent = { ...update }
      if (updatedStudent.name !== student.name) {
        // Update name only if the name has changed
        updatedStudent.name = event.target.name.value
      }
      console.log(level)
      console.log(student.skillLevel)
      console.log(update)
      if (level !== student.skillLevel) {
        updatedStudent.skillLevel = level
      }
      // Send PUT request to update student data
      await put(`${STUDENTS}/${studentId.id}`, updatedStudent, accessToken)
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
      value={formattedDOB || ''}
      onChange={handleDOBChange}
      />
      <Form.Group className="mb-3" controlId="skillLevel">
          <Form.Label>Skill level:</Form.Label>
          <DropdownButton id="levels" title={level === 0 ? 'Novice' : level ? `Level ${level}` : `Level ${student.skillLevel}`}>
            <Dropdown.Item onClick={() => setLevel(0)}>Novice</Dropdown.Item>
            <Dropdown.Item onClick={() => setLevel(1)}>Level 1</Dropdown.Item>
            <Dropdown.Item onClick={() => setLevel(2)}>Level 2</Dropdown.Item>
            <Dropdown.Item onClick={() => setLevel(3)}>Level 3</Dropdown.Item>
            <Dropdown.Item onClick={() => setLevel(4)}>Level 4</Dropdown.Item>
            <Dropdown.Item onClick={() => setLevel(5)}>Level 5</Dropdown.Item>
            <Dropdown.Item onClick={() => setLevel(6)}>Level 6</Dropdown.Item>
          </DropdownButton>
        </Form.Group>
      <Button variant="primary" type="submit">Submit</Button></Form>
      </>) : (
        <h3>You must be an admin to access this resource.</h3>
      )}
      </Container>
    </>
  )
}

export default EditStudent