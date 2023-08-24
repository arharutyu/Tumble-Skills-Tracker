import React from 'react'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const StartButton = ({student, assessSkills}) => {
  const nav = useNavigate()

  async function submit(event) {
    event.preventDefault()
    localStorage.setItem('student', JSON.stringify(student))
    localStorage.setItem('assessment', JSON.stringify(assessSkills))
    nav('/new/start')
  }

  return (
    <>
      <Button variant="primary" onClick={submit}>Start Assessment</Button>
    </>
  )
}

export default StartButton