import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'

const ContentCard = ({title, text, image, link}) => {

  return (
    <>
        <Card>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '110px' }}>
          <Card.Img variant="top" src={image} style={{ width: '100px', height: '100px', borderRadius: '10%' }} />
          </div>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {text}
            </Card.Text>
            <Link to={link}><Button variant="primary">Go to {title}</Button></Link>
          </Card.Body>
        </Card>
    </>
  )
}

export default ContentCard