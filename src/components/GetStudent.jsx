import React, { useState } from 'react'
import '../components/App.css'
import SearchText from '../components/SearchText'
import { STUDENTS } from '../api/endpoints'
import ListGroup from 'react-bootstrap/ListGroup'

const GetStudent = ({setStudent}) => {
  // state to handle search input
  const [searchStudents, setSearchStudents] = useState([])
  // state to handle selected student
  const [isStudentSelected, setIsStudentSelected] = useState(false)

  // handle click on student name
  const handleStudentClick = (studentId) => {
    setStudent(studentId)
    setIsStudentSelected(true)
  }

  // Return null if student is selected to unmount
  if (isStudentSelected) {
    return null
  }

  return (
    <>
        <SearchText text="Search for a student" endpoint={STUDENTS} set={setSearchStudents}  />
        <ListGroup>
        {searchStudents.map((student, index) => (
          <ListGroup.Item key={index} onClick={() => handleStudentClick(student._id)}>{student.name}</ListGroup.Item>
        ))
        }
        </ListGroup> 
    </>
  )
}

export default GetStudent