import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'

const UserCard = ({ name }) => {
  return ( <>
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
    </>
  )
}

export default UserCard