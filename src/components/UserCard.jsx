import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const UserCard = ({ username, name, id, is_admin, role }) => {
  let admin = "No"

  if (is_admin) {
    admin = "Yes"
  }

  return (
    <>
    <Card>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{role}</Card.Subtitle>
      </Card.Body>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>username: {username}</ListGroup.Item>
          <ListGroup.Item>Id: {id}</ListGroup.Item>
          <ListGroup.Item>Admin: {admin}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
    </>
  )
}

export default UserCard