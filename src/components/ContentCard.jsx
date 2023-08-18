import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const ContentCard = ({title, text, image, link}) => {

  return (
    <>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {text}
            </Card.Text>
            <Button variant="primary" href={link}>Go to {title}</Button>
          </Card.Body>
        </Card>
    </>
  )
}

export default ContentCard