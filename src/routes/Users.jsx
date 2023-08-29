import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'
import SearchText from '../components/SearchText'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StudentCard from '../components/StudentCard'
import '../components/App.css'
import Container from 'react-bootstrap/Container'
import { get } from '../api/api.js'
import { USERS } from '../api/endpoints'

const Users = ({isAdmin, accessToken}) => {
  const [users, setUser] = useState([])
  console.log(accessToken)
  const addUser = { name: 'Add new User'}

  




  
  
  return (<>
  <Container className="contcontainer">
    <h1>Users</h1>
    <SearchText text="Search for a user" />
    <Row xs={1} md={3} lg={4} className="g-4">
      <StudentCard name="Add new user" />
      {users.map(user => (
        <Col>
          <UserCard name={user.name} username={user.username} id={user.id} is_admin={user.is_admin} role={user.role} />
        </Col>
      ))}
    </Row>
    </Container>
    </>
  )
}

export default Users