import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import { post } from '../api/api'
import { ASSESSMENTS } from '../api/endpoints'
import { useNavigate } from 'react-router-dom'

const SubmitAsssessment = ({ assessed, student, accessToken, validationError }) => {
  // Initialize the navigation function from React Router
  const nav = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    async function submitAssessment() {
    // Create the assessment object with student ID and assessed skills
    const assessment = {
      "student": student,
      "isCompleted": true,
      "skills": [...assessed]
    }
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
      if (isLoading) {
    // Send a POST request to the authentication endpoint
    submitAssessment().then(() => {
        setIsLoading(false)
      })
    }
  }, [isLoading])

  // Function to handle the submit assignment button click
  async function submit(event) {
    event.preventDefault()
    setIsLoading(true)
  }

  return (
    <>
      <Button variant="primary" onClick={submit} disabled={validationError}>
      {isLoading ? '...' : 'Submit Assessment'}</Button>
    </>
  )
}

export default SubmitAsssessment