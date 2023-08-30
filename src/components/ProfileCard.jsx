import Card from 'react-bootstrap/Card'
import React from 'react'


const ProfileCard = ({ name }) => {
  return ( <>
    <Card className='namefortesting'>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
    </>
  )
}

export default ProfileCard