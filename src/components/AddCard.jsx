import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const AddCard = ({ type, link }) => {
  
  return (
    <>
    <Card className="border-1" border="primary">
      <Card.Body>
        <Card.Title>
        <Link to={link}>
        Add {type} </Link></Card.Title>
      </Card.Body>
    </Card>
    </>
  )
}

export default AddCard