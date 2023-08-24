import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import '../components/App.css'
import SearchText from '../components/SearchText'
import { STUDENTS } from '../api/endpoints'
import ListGroup from 'react-bootstrap/ListGroup'

const NewAssessment = () => {
  const [searchStudents, setSearchStudents] = useState([])

  return (
    <>
  <Container className="contcontainer">
    <h1>New Assessment</h1>
    <SearchText text="Search for a student" endpoint={STUDENTS} set={setSearchStudents}  />
    <ListGroup>
      {searchStudents.map((student, index) => (
        <ListGroup.Item key={index}>{student.name}</ListGroup.Item>
      ))
      }
    </ListGroup>
  </Container>
  </>
  )
}

export default NewAssessment