import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { get } from '../api/api'
import { STUDENTS, ASSESSMENTS } from '../api/endpoints'
import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'
import AdminMenu from './AdminMenu'

const StudentProfile = ({isAdmin}) => {
  // State to store student data
  const [student, setStudent] = useState([])
  const [assessments, setAssessments] = useState([])

  // Extract student ID from URL parameters
  const studentId = useParams()

  useEffect(() => {
  (async () => {
    // Fetch student data from the server using the student ID
    const endpoint = `${STUDENTS}/${studentId.id}`
    const res = await get(endpoint)
    setStudent(res)
    // Fetch all assessments relevant to student
    const assessEp = `${ASSESSMENTS}/student/${studentId.id}`
    const assessRes = await get(assessEp)
    setAssessments(assessRes)
    })()
  }, [])

  console.log(assessments)
  
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
    <Accordion defaultActiveKey="0">
    {assessments.length > 0 ? (
      assessments.map((assessment, index) => {
        const skillLevels = []
        assessment.skills.forEach((skill) => {
          skillLevels.push(...skill.skill.levels)
        })
      const uniqueSkillLevels = [...new Set(skillLevels)]
      console.log(uniqueSkillLevels)

        return (
        <Accordion.Item eventKey={index} key={index}>
          <Accordion.Header>
            {new Date(assessment.Date).toLocaleString('en-AU', { dateStyle: 'full', timeStyle: 'short' })}
            </Accordion.Header>
          <Accordion.Body>
                <div>
                <strong>Completed by:</strong> {assessment.doneBy.name}</div>
                <div><strong>Level: </strong>
                {uniqueSkillLevels.map((level, levelIndex) => (
                  <span key={levelIndex}>
                    {levelIndex > 0 && ', '}
                    {level}
                  </span>
                ))}</div>
             
            <Table striped>
              <thead>
              <tr>
                <th>#</th>
                <th>Skill</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
            {assessment.skills.map((skill, skillIndex) => (
                        <tr key={skillIndex}>
                          <td>{skillIndex + 1}</td>
                          <td>{skill.skill.skillName}</td> 
                          <td>{skill.score}</td> 
                        </tr>
                      ))}
            </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>        
      )})
      ) : (
        <p>No assessments found for this student.</p>
      )}
    </Accordion>
    </Card.Body>
    <AdminMenu />
    </Container>
    </>
  )
}

export default StudentProfile