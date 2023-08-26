import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { get } from '../api/api'
import { STUDENTS } from '../api/endpoints'

const StudentProfile = ({isAdmin}) => {
  // State to store student data
  const [student, setStudent] = useState([])
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

  return (
    <>
    <Container className="contcontainer">
    <h1>Student: {student.name}</h1>
    <Card.Body>
        <Card.Title>Student Information</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Id: {student._id}</Card.Subtitle>
      </Card.Body>
    <Card.Body>
          <ListGroup variant="flush">
            <ListGroup horizontal>
              <ListGroup.Item>DOB:</ListGroup.Item>
              <ListGroup.Item>{student.DOB}</ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal>
              <ListGroup.Item>Skill Level:</ListGroup.Item>
              <ListGroup.Item>{student.skillLevel}</ListGroup.Item>
            </ListGroup>
          </ListGroup>
        </Card.Body>
    <Card.Body>
        <Card.Title>Assessments</Card.Title>
    </Card.Body>
    <Card.Body>
          
    </Card.Body>
    </Container>
    </>
  )
}

export default StudentProfile