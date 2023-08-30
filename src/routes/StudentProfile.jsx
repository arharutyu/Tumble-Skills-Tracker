import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { get } from '../api/api'
import { STUDENTS, ASSESSMENTS } from '../api/endpoints'
import AdminMenu from '../components/AdminMenu'
import ViewAssessments from '../components/ViewAssessments'

const StudentProfile = ({isAdmin, accessToken}) => {
  // State to store student data
  const [student, setStudent] = useState([])
  const [assessments, setAssessments] = useState([])

  // Extract student ID from URL parameters
  const studentId = useParams()

  // Function to fetch assessments and update state
  const fetchAssessments = async () => {
    try {
      // Fetch all assessments relevant to student
      const assessEp = `${ASSESSMENTS}/student/${studentId.id}`;
      const assessRes = await get(assessEp, accessToken);
      setAssessments(assessRes.toReversed());
    } catch (error) {
      console.error('Error fetching assessments:', error);
    }
  }

  useEffect(() => {
  (async () => {
    // Fetch student data from the server using the student ID
    const endpoint = `${STUDENTS}/${studentId.id}`
    const res = await get(endpoint, accessToken)
    setStudent(res)
    // Fetch all assessments relevant to student
    const assessRes = fetchAssessments()
    setAssessments(assessRes)
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
              <ListGroup.Item>{new Date(student.DOB).toLocaleDateString('en-AU', {dateStyle: 'short'})}</ListGroup.Item>
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
        <ViewAssessments assessments={assessments} isAdmin={isAdmin} accessToken={accessToken} fetchAssessments={fetchAssessments} />
    </Card.Body>
    {isAdmin && (<><AdminMenu type={STUDENTS} id={studentId.id} accessToken={accessToken} /></>)}
    </Container>
    </>
  )
}

export default StudentProfile