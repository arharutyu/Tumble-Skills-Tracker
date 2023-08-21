import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import './Login.css'

const Login = () => {
  const nav = useNavigate()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  async function submit(event) {
    // TODO: Make this work
    event.preventDefault()
    const authEndpoint = 'http://localhost:4001/auth/login';

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
        const token = response.headers.get('accessToken');
        // Store the token in local storage or state for later use
        // For example, you can use localStorage.setItem('token', token);
        nav('/');
      } else {
        // Handle authentication error
         
        console.error('Authentication failed');
      }
    })
    .catch(error => {
      console.error('Error during authentication:', error);
    });
  }
  

  return (<>
    <Container fluid="md" id='login'>
          <img src="https://eliteallstars.com.au/wp-content/uploads/2019/06/eliteAsset-2.png" alt="Logo" width="250"></img>
        <h1>Tumble Skills Tracker Login</h1>
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
    </>
    )
  }

export default Login