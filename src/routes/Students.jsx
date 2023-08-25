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
import AddCard from '../components/AddCard'

const Students = ({isAdmin, accessToken}) => {
  const [students, setStudents] = useState([])
  console.log(accessToken)
  const addStudent = { name: 'Add Student' }

  // Fetch students' data on component mount
  useEffect(() => {
    (async () => {
      const data = await get(STUDENTS, accessToken)
      setStudents(data)
      })()
  }, [])

  return ( <>
  <Container className="contcontainer">
    <h1>Students</h1>
    <SearchText text="Search for a student" endpoint={STUDENTS} set={setStudents}  />
    <Row xs={1} md={4} lg={6} className="g-4">
      {isAdmin && (<>
      <Col key="add"><AddCard type="Student" link="/students/new" /></Col>
      </>)}
      {students.length > 0 && (<>
      {students.map((student, index) => (
        <Col key={index}>
          <StudentCard name={
            <Link to={`/students/${student._id}`}>
            {student.name} </Link>
            } />
        </Col>
      ))}
      </>
      )
      }
    </Row>
    </Container>
    </>
  )
}

export default Students