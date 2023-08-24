import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import StudentCard from '../components/StudentCard'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'

const StartAssessment = () => {
  const [student, setStudent] = useState([])
  const [assessSkills, setAssessSkills] = useState([])
  const [assessed, setAssessed] = useState([])

  console.log(assessSkills)
  console.log(assessed)


  useEffect(() => {
    setStudent(JSON.parse(localStorage.getItem('student')) || [])
    setAssessSkills(JSON.parse(localStorage.getItem('assessment')) || [])
  }, [])

  const handleRadioChange = (skillName, score) => {
    const updatedAssessed = assessed.filter((item) => item.skillName !== skillName);
    updatedAssessed.push({ skillName, score });
    setAssessed(updatedAssessed);
  }

  return (
    <>
      <Container className="contcontainer">
        <h1>Assessment</h1>
        <StudentCard name={student.name} />
        <h3>Skills</h3>
        <Table striped>
          <thead>
          <tr>
            <th>#</th>
            <th>Skill</th>
            <th>At</th>
            <th>WT</th>
            <th>A</th>
            <th>EE</th>
            <th>O</th>
          </tr>
        </thead>
        <tbody>
          {assessSkills.map((skill, index) => (
            <tr key={index}>
            <td>{index + 1}</td>
            <td>{skill.skillName}</td>
            {[0, 1, 2, 3, 4].map((score) => (
              <td key={score}>
                <Form.Check
                  type="radio"
                  inline
                  name={`option-${index}`}
                  aria-label={`score-${score}`}
                  checked={assessed.find((item) => item.skillName === skill.skillName)?.score === score}
                  onChange={() => handleRadioChange(skill.skillName, score)}
                />
              </td>
            ))}
          </tr>
          ))}
        </tbody>
        </Table>
      </Container>
    </>
  )
}

export default StartAssessment