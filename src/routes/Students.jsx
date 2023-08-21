import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import StudentCard from '../components/StudentCard'
import SearchText from '../components/SearchText'

const Students = ({isAdmin}) => {
  let students = [
    { name: 'John' },
    { name: 'John' },
    { name: 'John' },
    { name: 'John' },
    { name: 'John' },
    { name: 'John' },
    { name: 'John' },
    { name: 'John' },
    { name: 'John' },
    { name: 'John' },
    { name: 'John' }
  ]

  const addStudent = { name: 'Add Student' }

  if (isAdmin) {
    students.unshift(addStudent)
  }

  return ( <>
    <h1>Students</h1>
    <SearchText text="Search for a student" />
    <Row xs={1} md={4} lg={6} className="g-4">
      {students.map(student => (
        <Col>
          <StudentCard name={student.name} />
        </Col>
      ))}
    </Row>
    </>
  )
}

export default Students