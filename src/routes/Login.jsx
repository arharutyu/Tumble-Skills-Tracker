import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import './Login.css'

const Login = ({ setIsLoggedIn, setUser, setAccessToken }) => {
  const nav = useNavigate()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  async function submit(event) {
    event.preventDefault()
    const authEndpoint = 'http://localhost:4001/login';

    // Create a request payload
    const credentials = {
      username: username,
      password: password,
    };

    // Send a POST request to the authentication endpoint
    await fetch(authEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
    .then(response => {
      if (response.ok) {
        // Get the JWT token from the response header
        return response.json();
      } else {
        // Handle authentication error
        return response.json().then(errorData => {
          setMessage(errorData.message);
          throw new Error(errorData.message);
        });
      }
    })
    .then(data => {
      sessionStorage.setItem('accessToken', data.accessToken)
      sessionStorage.setItem('user', JSON.stringify(data.user))
      setIsLoggedIn(true)
      setUser(data.user)
      setAccessToken(data.accessToken)
      nav("/");
    })
    .catch(error => {
      console.error('Error during authentication:', error);
    });
  }
  

  return (<>
  <Container fluid id="login-bg">
    <Container fluid="md" id='login'>
          <img src="https://eliteallstars.com.au/wp-content/uploads/2019/06/eliteAsset-2.png" alt="Logo" width="250"></img>
        <h1>Tumble Skills Tracker Login</h1>
        {message && <div className="error-message">{message}</div>}
        <Form onSubmit={submit} id='login-form'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="input" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
    </Container>
    </>
    )
  }

export default Login