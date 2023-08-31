import React from 'react'
import Card from 'react-bootstrap/Card'


const UserCard = ({ name }) => {
  return ( <>
    <Card className='namefortesting'>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
    </>
  )
}

export default UserCard