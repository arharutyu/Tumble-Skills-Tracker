import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import StudentCard from '../components/StudentCard'
import SearchText from '../components/SearchText'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import '../components/App.css'
import { get } from '../api/api.js'
import { STUDENTS } from '../api/endpoints.js'

const Students = ({isAdmin}) => {
  const [students, setStudents] = useState([])
  
  const addStudent = { name: 'Add Student' }

  useEffect(() => {
    (async () => {
      const data = await get(STUDENTS)
      setStudents(data)
      })()
  }, [])
  console.log(students)
  return ( <>
  <Container className="contcontainer">
    <h1>Students</h1>
    <SearchText text="Search for a student" />
    <Row xs={1} md={4} lg={6} className="g-4">
      {students.map((student, index) => (
        <Col key={index}>
          <StudentCard name={
            <Link to={`/students/${student._id}`}>
            {student.name} </Link>
            } />
        </Col>
      ))}
    </Row>
    </Container>
    </>
  )
}

export default Students