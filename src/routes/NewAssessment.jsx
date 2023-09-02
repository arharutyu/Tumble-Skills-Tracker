import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import '../components/App.css'
import GetLevel from '../components/GetLevel'
import GetStudent from '../components/GetStudent'
import { get } from '../api/api'
import ProfileCard from '../components/ProfileCard'
import StartButton from '../components/StartButton'

const NewAssessment = ({ accessToken }) => {
  // State to store selected student and assessment skills
  const [student, setStudent] = useState([])
  const [name, setName] = useState('')
  const [assessSkills, setAssessSkills] = useState([])
  const [studentMessage, setStudentMessage] = useState('')
  const [levelMessage, setLevelMessage] = useState('')

  // Fetch student data and update state when a student is selected
  useEffect(() => {
    if (student.length > 0) {
        (async () => {
          setStudentMessage('Loading student')
          let endpoint = `/students/${student}`
          const data = await get(endpoint, accessToken)
          setStudent(data)
          setName(data.name)
          setStudentMessage('')
          })()
    }
  }, [student])

  return (
    <>
  <Container className="contcontainer">
    <h1>New Assessment</h1>
    <GetStudent setStudent={setStudent} accessToken={accessToken} />
    {name && <ProfileCard name={name} />}
    {studentMessage ? <p>{studentMessage}</p>: null}
    <GetLevel levelMessage={levelMessage} setLevelMessage={setLevelMessage} setAssessSkills={setAssessSkills} assessSkills={assessSkills}/>
    {name && (assessSkills.length > 0) && <StartButton student={student} assessSkills={assessSkills} />}
  </Container>
  </>
  )
}

export default NewAssessment