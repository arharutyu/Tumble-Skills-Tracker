import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { get } from '../api/api'
import { USERS } from '../api/endpoints'
import AdminMenu from '../components/AdminMenu'
import InputGroup from 'react-bootstrap/InputGroup'

const UserProfile = ({isAdmin, accessToken}) => {
    // State to store user data
    const [user, setUser] = useState([])
    

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

    return (
        <>
        
        <Container className="contcontainer">
        <h1>User: {user.name}</h1>
        <Card.Body>
            <Card.Title>User Information</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Id: {user._id}</Card.Subtitle>
          </Card.Body>
    
        <Card.Body>
              <ListGroup variant="flush">
                <ListGroup horizontal>
                  <ListGroup.Item>Username:</ListGroup.Item>
                  <ListGroup.Item>{user.username}</ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal>
                  <ListGroup.Item>Name</ListGroup.Item>
                  <ListGroup.Item>{user.name}</ListGroup.Item>
                </ListGroup>
                <ListGroup horizontal>
                  <ListGroup.Item>Admin:</ListGroup.Item>
                  <ListGroup.Item>{`${user.isAdmin}`}</ListGroup.Item>
                </ListGroup>
              </ListGroup>
            </Card.Body>
            {isAdmin && (<><AdminMenu type={USERS} id={userId.id} accessToken={accessToken} /></>)}
        </Container>
        </>
      )
    }

export default UserProfile