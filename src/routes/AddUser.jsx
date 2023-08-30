import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { post } from '../api/api'
import { USERS } from '../api/endpoints'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

const AddUser = ({accessToken, isAdmin}) => {
    const nav = useNavigate()

    const [name, setName] = useState('')
    const [username, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [admin, setAdmin] = useState(false)
    const [errors, setErrors] = useState({
      name: false,
      username: false,
      password: false,
    })

    async function submit(event) {
        event.preventDefault()



    // Check for empty fields and update errors object
    const newErrors = {
      name: name === '',
      username: username === '',
      password: password === '',
    }
    setErrors(newErrors)

     // If any field is empty, do not proceed
     if (newErrors.name || newErrors.username || newErrors.password) {
      return
    }

        const newUser = {
            name: name,
            username: username,
            password: password,
            isAdmin: admin,
        }

        try {
            const res = await post(USERS, newUser, accessToken)
            const data = await res.json()
            const newUserId = data._id

            nav(`/users/${newUserId}`)
        } catch (err) {
            console.error(err)
        }
    }


    return (
        <>
        <Container className="contcontainer">
        {isAdmin ? (<>
          <h1>Add New User</h1>
          <p>Enter user details below and submit.</p>
    
          {/* Name Input */}
          <Form onSubmit={submit} id='add-user'>
          <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="input"
                placeholder="Enter the user's name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="text-danger">Name cannot be empty.</p>}
            </Form.Group>

            {/* Username Input */}
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="input"
                placeholder="Enter the user's username"
                value={username}
                onChange={(e) => setUser(e.target.value)}
              />
              {errors.username && <p className="text-danger">Username cannot be empty.</p>}
            </Form.Group>

            {/* Password Input */}
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="input"
                placeholder="Enter the password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-danger">Password cannot be empty.</p>}
            </Form.Group>

            {/* Admin Checkbox */}
            <Form.Group className="mb-3" controlId="isAdmin">
              <Form.Label>Admin:</Form.Label>
              <input
                type="checkbox"
                placeholder="Admin"
                value={admin}
                onClick={(e) => setAdmin(e.target.checked)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </>) : (
            <h3>You must be an admin to access this resource.</h3>
          )}
        </Container>
        
        </>
      )
    }
    
    export default AddUser
