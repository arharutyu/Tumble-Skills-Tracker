import React from 'react'
import Button from 'react-bootstrap/Button'
import { post } from '../api/api'
import { ASSESSMENTS } from '../api/endpoints'
import { useNavigate } from 'react-router-dom'

const SubmitAsssessment = ({ assessed, student, accessToken }) => {
  // Initialize the navigation function from React Router
  const nav = useNavigate()
  
  // Function to handle the submit assignment button click
  async function submit(event) {
    event.preventDefault()
    // console.log(assessed)
    // console.log(student)

    // Create the assessment object with student ID and assessed skills
    const assessment = {
      "student": student,
      "isCompleted": true,
      "skills": [...assessed]
    }
    // console.log(assessment)

    try {
      // Make a POST request to create the assessment on the server
      const response = await post(ASSESSMENTS, assessment, accessToken)
      // Parse the JSON response returned by the API
      const createdAssessment = await response.json()

      // Log success message and navigate to the student's page
      console.log("Assessment submitted successfully", createdAssessment)
      nav(`/students/${createdAssessment.student}`)

    } catch (error) {
      // Handle errors and log error message
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