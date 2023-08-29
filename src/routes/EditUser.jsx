import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { get, put } from '../api/api'
import { USERS } from '../api/endpoints'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const EditUser = ({isAdmin, accessToken}) => {
    const [user, setUser] = useState([])
    const [update, setUpdate] = useState({})

    const nav = useNavigate()

    // Extract user ID from URL parameters
    const userId = useParams()

    useEffect(() => {
        (async () => {
          // Fetch user data from the server using the user ID
          const endpoint = `${USERS}/${userId.id}`
          const res = await get(endpoint, accessToken)
          setUser(res)
          })()
        }, [])
      
        
        // Handle change for Name input
        const handleNameChange = (event) => {
          setUpdate({ ...update, name: event.target.value });
        }

        // Handle change for Username input
        const handleUserChange = (event) => {
            setUpdate({ ...update, username: event.target.value})
        }

        // Handle change for Password input
        const handlePassChange = (event) => {
            setUpdate({ ...update, password: event.target.value})
        }

        // Handle change for Password input
        const handleAdminChange = (event) => {
            setUpdate({ ...update, isAdmin: event.target.checked})
        }
    
         // Handle form submission
        const submit = async (event) => {
          event.preventDefault()
          if (update.name !== user.name) {
            // Update only if the name has changed
            setUpdate({ ...update, name: event.target.name.value });
          }

          // Send PUT request to update user data
          await put(`${USERS}/${userId.id}`, update, accessToken)
          console.log('PUT request done')
          // Navigate to student's details page
          nav(`/users/${userId.id}`)
        }
        
        return (
        <>
        <Container className="contcontainer">
        {isAdmin ? (<>
        <h1>Update User</h1>
        <Form onSubmit={submit}>
          <Form.Control
            type="text"
            placeholder={user._id}
            readOnly
          />
          <Form.Label>Name:</Form.Label>
          <Form.Control id="name" type="text" placeholder={user.name} onChange={handleNameChange} />
          <Form.Label>Username:</Form.Label>
          <Form.Control id="username" type="text" placeholder={user.username} onChange={handleUserChange} />
          <Form.Label>Password:</Form.Label>
          <Form.Control id="password" type="text" placeholder={user.password} onChange={handlePassChange} />
          <Form.Group className="mb-3" controlId="isAdmin">
              <Form.Label>Admin:</Form.Label>
              <input type="checkbox" defaultChecked={user.isAdmin} placeholder="Admin" onClick={handleAdminChange} />
            </Form.Group>
          
          
          <Button variant="primary" type="submit">Submit</Button></Form>
          </>) : (
            <h3>You must be an admin to access this resource.</h3>
          )}
          </Container>
        </>
      )
    }
    
    export default EditUser