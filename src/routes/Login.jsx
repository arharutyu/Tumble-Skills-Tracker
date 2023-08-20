import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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

  return (<>
    <h1>Login</h1>
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
  </>
  )
}

export default Login