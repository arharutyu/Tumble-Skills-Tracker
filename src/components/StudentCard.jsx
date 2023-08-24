import Card from 'react-bootstrap/Card'
import React from 'react'


const StudentCard = ({ name }) => {
  return ( <>
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
    </>
  )
}

export default StudentCard