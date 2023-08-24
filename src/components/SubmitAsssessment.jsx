import React from 'react'
import Button from 'react-bootstrap/Button'
import { post } from '../api/api'
import { ASSESSMENTS } from '../api/endpoints'

const SubmitAsssessment = ({ assessed, student }) => {
  async function submit(event) {
    event.preventDefault()
    console.log(assessed)
    console.log(student)
    const assessment = {
      "student": student,
      "isCompleted": true,
      "skills": [...assessed]
    }
    console.log(assessment)
    try {
      await post(ASSESSMENTS, assessment); // Await the post function call
      console.log("Assessment submitted successfully");
      
    } catch (error) {
      console.error("Error submitting assessment:", error);
    }
  }

  return (
    <>
      <Button variant="primary" onClick={submit}>Submit Assessment</Button>
    </>
  )
}

export default SubmitAsssessment