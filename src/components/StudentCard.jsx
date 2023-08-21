import Card from 'react-bootstrap/Card'
import React from 'react'
import { Link } from 'react-router-dom'

const StudentCard = ({ name, id }) => {
  return ( <>
    <Card>
      <Card.Body>
        <Card.Title><Link to="/students/:id">{name}</Link></Card.Title>
      </Card.Body>
    </Card>
    </>
  )
}

export default StudentCard