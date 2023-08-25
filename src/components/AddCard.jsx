import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const AddCard = ({ type, link }) => {
  // TODO: Add Link around Title text to go to path specified by passed in link prop
  // TODO: Add link prop
  
  return (
    <>
    <Card>
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