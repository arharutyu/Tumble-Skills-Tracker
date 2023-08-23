import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'

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
      <Container>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup horizontal>
              <ListGroup.Item>username:</ListGroup.Item>
              <ListGroup.Item>{username}</ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal>
              <ListGroup.Item>Id:</ListGroup.Item>
              <ListGroup.Item>{id}</ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal>
              <ListGroup.Item>Admin:</ListGroup.Item>
              <ListGroup.Item>{admin}</ListGroup.Item>
            </ListGroup>
          </ListGroup>
        </Card.Body>
      </Container>
    </Card>
    </>
  )
}

export default UserCard