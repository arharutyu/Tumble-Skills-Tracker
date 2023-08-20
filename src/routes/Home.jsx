import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ContentCard from '../components/ContentCard';

const Home = () => {
  let isAdmin = false

  let cards = [{
    title: "Students", 
    text:"See all current students, search for a student, and view inidividual student profiles.",
    image:"",
    link:"students"
  },
  {
    title: "Skills", 
    text:"See all current skills and levels.",
    image:"",
    link:"skills"
  },
  {
    title: "New Assessment", 
    text:"Create new assessment.",
    image:"",
    link:"new"
  }
  ]

  const usersCard =   {
    title: "Users", 
    text:"See all user details.",
    image:"",
    link:"users"
  }

  let lgBp = 3

  if (isAdmin) {
    cards.push(usersCard)
    lgBp ++
  }

  return ( <>
    <h1>Home</h1>
    <Row xs={1} md={2} lg={lgBp} className="g-4">
      {cards.map(card => (
        <Col>
          <ContentCard title={card.title} text={card.text} image={card.image} link={card.link} />
        </Col>
      ))}
    </Row>
  </>
  )
}


export default Home