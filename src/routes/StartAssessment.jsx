import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import StudentCard from '../components/StudentCard'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import SubmitAsssessment from '../components/SubmitAsssessment'

const StartAssessment = () => {
  const [student, setStudent] = useState([])
  const [assessSkills, setAssessSkills] = useState([])
  const [assessed, setAssessed] = useState([])

  console.log(student._id)
  console.log(assessed)

  // Fetch student and assessment data from localStorage on component mount
  useEffect(() => {
    // Get student and assessment data from localStorage, or use empty arrays as default
    setStudent(JSON.parse(localStorage.getItem('student')) || [])
    setAssessSkills(JSON.parse(localStorage.getItem('assessment')) || [])
  }, [])

  // Handle radio button changes
  const handleRadioChange = (_id, score) => {
    // Filter out the current skill from assessed data and add the new score
    const updatedAssessed = assessed.filter((item) => item.skill !== _id);
    updatedAssessed.push({ skill: _id, score });
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
                  checked={assessed.find((item) => item.skill === skill._id)?.score === score}
                  onChange={() => handleRadioChange(skill._id, score)}
                />
              </td>
            ))}
          </tr>
          ))}
        </tbody>
        </Table>
        <SubmitAsssessment assessed={assessed} student={student._id} />
      </Container>
    </>
  )
}

export default StartAssessment