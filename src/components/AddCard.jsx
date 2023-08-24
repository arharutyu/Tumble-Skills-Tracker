import React from 'react'
import Card from 'react-bootstrap/Card'

const AddCard = ({ type }) => {
  // TODO: Add Link around Title text to go to path specified by passed in link prop
  // TODO: Add link prop
  
  return (
    <>
    <Card>
      <Card.Body>
        <Card.Title>Add {type}</Card.Title>
      </Card.Body>
    </Card>
    </>
  )
}

export default AddCard