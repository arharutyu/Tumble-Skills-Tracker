import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import '../components/App.css'
import GetLevel from '../components/GetLevel'
import GetStudent from '../components/GetStudent'
import { get } from '../api/api'
import StudentCard from '../components/StudentCard'
import StartButton from '../components/StartButton'

const NewAssessment = () => {
  const [student, setStudent] = useState([])
  const [name, setName] = useState('')
  const [assessSkills, setAssessSkills] = useState([])
  console.log(student)
  console.log(assessSkills)

  if (student.length > 0) {
      (async () => {
        let endpoint = `/students/${student}`
        const data = await get(endpoint)
        setStudent(data)
        setName(data.name)
        })()
  }

  return (
    <>
  <Container className="contcontainer">
    <h1>New Assessment</h1>
    <GetStudent setStudent={setStudent} />
    {name && <StudentCard name={name} />}
    <GetLevel setAssessSkills={setAssessSkills} assessSkills={assessSkills}/>
    {name && (assessSkills.length > 0) && <StartButton student={student} assessSkills={assessSkills} />}
  </Container>
  </>
  )
}

export default NewAssessment