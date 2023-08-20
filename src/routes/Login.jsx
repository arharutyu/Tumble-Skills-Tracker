import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import './Login.css'
import { Row } from 'react-bootstrap'

const Login = () => {
  const nav = useNavigate()

  let testUser = [{
    username: "test",
    password: "password"
  }]

  function submit(event) {
    // TODO: Make this work
    event.preventDefault()
    if ((event.target.username === testUser.username) && (event.target.password === testUser.password)) {
      nav('/')
    }}


    // TODO: Fix logo sizing when resizing window (esp large size)

  return (<>
  <Container fluid="sm" id='login'>
    <Row>
      <img src="https://eliteallstars.com.au/wp-content/uploads/2019/06/eliteAsset-2.png" alt="Logo" max-width="300"></img>
      <h1>Tumble Skills Tracker Login</h1>
    </Row>
    <Row>
      <Form onSubmit={submit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="input" placeholder="Enter username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Row>
  </Container>
  </>
  )
}

export default Login