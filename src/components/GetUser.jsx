import React, { useState } from 'react'
import '../components/App.css'
import SearchText from '../components/SearchText'
import { USERS } from '../api/endpoints'
import ListGroup from 'react-bootstrap/ListGroup'

const GetUser = ({setUser, accessToken }) => {
  // state to handle search input
  const [searchUsers, setSearchUsers] = useState([])
  // state to handle selected user
  const [isUserSelected, setIsUserSelected] = useState(false)

  // handle click on user name
  const handleUserClick = (userId) => {
    setUser(userId)
    setIsUserSelected(true)
  }

  // Return null if user is selected to unmount
  if (isUserSelected) {
    return null
  }

  return (
    <>
        <SearchText text="Search for a user" endpoint={USERS} set={setSearchUsers} accessToken={accessToken}  />
        <ListGroup>
        {searchUsers.map((user, index) => (
          <ListGroup.Item key={index} onClick={() => handleUserClick(user._id)}>{user.name}</ListGroup.Item>
        ))
        }
        </ListGroup> 
    </>
  )
}

export default GetUser