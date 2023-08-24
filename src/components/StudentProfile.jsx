import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const StudentProfile = ({isAdmin}) => {
  const [student, setStudent] = useState([])
  const studentId = useParams()

  let accessToken = sessionStorage.getItem('accessToken')

  useEffect(() => {
  (async () => {
    const res = await fetch(`http://localhost:4001/students/${studentId.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'accessToken': `${accessToken}`,
      }
    }
    )
    const data = await res.json()
    setStudent(data)
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