import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import StudentCard from '../components/StudentCard'
import SearchText from '../components/SearchText'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import '../components/App.css'

const Students = ({isAdmin}) => {
  const [students, setStudents] = useState([])
    console.log(isAdmin)
  const addStudent = { name: 'Add Student' }

  if (isAdmin) {

    students.unshift(addStudent)
  }
  let accessToken = sessionStorage.getItem('accessToken')

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:4001/students', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'accessToken': `${accessToken}`,
        }
      }
      )
      const data = await res.json()
      setStudents(data)
      })()
  }, [])

  return ( <>
  <Container className="contcontainer">
    <h1>Students</h1>
    <SearchText text="Search for a student" />
    <Row xs={1} md={4} lg={6} className="g-4">
      {students.map((student, index) => (
        <Col key={index}>
          <StudentCard name={student.name} />
        </Col>
      ))}
    </Row>
    </Container>
    </>
  )
}

export default Students