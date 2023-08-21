import Card from 'react-bootstrap/Card'
import React from 'react'

const StudentCard = ({ name }) => {
  return ( <>
    <Card>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
    </>
  )
}

export default StudentCard