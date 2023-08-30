import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import UserCard from '../components/UserCard'
import SearchText from '../components/SearchText'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import '../components/App.css'
import { get } from '../api/api.js'
import { USERS } from '../api/endpoints'
import AddCard from '../components/AddCard'

const Users = ({isAdmin, accessToken}) => {
  const [users, setUser] = useState([])
  const addUser = { name: 'Add new User'}

  // Fetch users' data on component mount
  useEffect(() => {
    (async () => {
      const data = await get(USERS, accessToken)
      setUser(data)
    })()
  }, [])
  
  return (<>
  <Container className="contcontainer">
    <h1>Users</h1>
    {isAdmin ? (<>
    <SearchText text="Search for a user" endpoint={USERS} accessToken={accessToken} set={setUser}  />
    <Row xs={1} md={4} lg={6} className="g-4">
      
      <Col key="add"><AddCard type="User" link="/users/new" /></Col>
      
      {users.length > 0 && (<>
      {users.map((user, index) => (
        <Col key={index}>
          <UserCard name={
            <Link to={`/users/${user._id}`}>
            {user.name} </Link>
            } />
        </Col>
      ))}
      </>
      )
      }
    </Row></>) : (
        <h3>You must be an admin to access this resource.</h3>)}
    </Container>
    </>
  )
}

export default Users