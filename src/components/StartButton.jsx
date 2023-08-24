import React from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const StartButton = ({student, assessSkills}) => {
  const nav = useNavigate()

  // Function to handle the click of the assessment start button
  async function submit(event) {
    event.preventDefault()

    // Store the selected student and assessment skills in local storage
    localStorage.setItem('student', JSON.stringify(student))
    localStorage.setItem('assessment', JSON.stringify(assessSkills))

    // Navigate to the assessment start page
    nav('/new/start')
  }

  return (
    <>
      <Button variant="primary" onClick={submit}>Start Assessment</Button>
    </>
  )
}

export default StartButton