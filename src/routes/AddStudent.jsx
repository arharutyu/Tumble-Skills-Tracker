import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { post } from '../api/api'
import { STUDENTS } from '../api/endpoints'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ListGroup from 'react-bootstrap/ListGroup'


const AddStudent = ({accessToken, isAdmin} ) => {
  const nav = useNavigate()

  const [name, setName] = useState('')
  const [dob, setDob] = useState('')
  const [level, setLevel] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  async function submitNewStudent() {
    try {
      setMessage('')

      const newStudent = {
        name: name,
        DOB: dob,
        skillLevel: level,
      }

      const res = await post(STUDENTS, newStudent, accessToken)
      
      if (!res.ok) {
        const errorData = await res.json()

        if (errorData.error) {
          const errorMessages = errorData.error.split('Student validation failed: ')
          const fieldErrors = {}
          let generalError = ''
          let errors = []
          console.log(errorMessages)

          for (const errorMessage of errorMessages) {
            const splitErrors = errorMessage.split(', ')
            errors.push(splitErrors)
          }
          setMessage(errors[1])
          }
        }
       else {
        const data = await res.json()
        const newStudentId = data._id
        nav(`/students/${newStudentId}`)
      } 
    } catch (err) {
        console.error(err)
      }
    }

    useEffect(() => {
      if (isLoading) {
        submitNewStudent().then(() => {
          setIsLoading(false)
        })
      }
    }, [isLoading])

  async function submit(event) {
    event.preventDefault()
    setIsLoading(true)
  } 
  console.log(message)

  return (
    <>
    <Container className="contcontainer">
    {isAdmin ? (<>
      <h1>Add New Student</h1>
      <p>Enter student details below and submit.</p>

      <Form onSubmit={submit} id='add-student'>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="input" placeholder="Enter student name" value={name} onChange={e => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="dob">
          <Form.Label>Date of Birth:</Form.Label>
          <Form.Control type="date" value={dob} onChange={e => setDob(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="skillLevel">
          <Form.Label>Skill level:</Form.Label>
          <DropdownButton id="levels" title={level === 0 ? 'Novice' : level ? `Level: ${level}` : "Choose a level"}>
            <Dropdown.Item onClick={() => setLevel(0)}>Novice</Dropdown.Item>
            <Dropdown.Item onClick={() => setLevel(1)}>Level 1</Dropdown.Item>
            <Dropdown.Item onClick={() => setLevel(2)}>Level 2</Dropdown.Item>
            <Dropdown.Item onClick={() => setLevel(3)}>Level 3</Dropdown.Item>
            <Dropdown.Item onClick={() => setLevel(4)}>Level 4</Dropdown.Item>
            <Dropdown.Item onClick={() => setLevel(5)}>Level 5</Dropdown.Item>
            <Dropdown.Item onClick={() => setLevel(6)}>Level 6</Dropdown.Item>
          </DropdownButton>
        </Form.Group>
        <ListGroup>
          {message ? (
            message.map((mes, index) => <ListGroup.Item variant="warning" key={index}>{mes}</ListGroup.Item>)
          ) : null}
        </ ListGroup>
        <Button variant="primary" type="submit">
          {isLoading? '...' : 'Submit'}
        </Button>
      </Form>
      </>) : (
        <h3>You must be an admin to access this resource.</h3>
      )}
    </Container>
    
    </>
  )
}

export default AddStudent