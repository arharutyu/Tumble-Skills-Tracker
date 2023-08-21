import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ContentCard from '../components/ContentCard';

const Home = ({isAdmin}) => {
  // Cards to render for all user types
  // TODO: Images
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

  // Admin only cards
  const usersCard =   {
    title: "Users", 
    text:"See all user details.",
    image:"",
    link:"users"
  }

  // Define large breakpoint # of cards in row
  let lgBp = 3

  // If isadmin push card to array & increase breakpoint #
  if (isAdmin) {
    cards.push(usersCard)
    lgBp ++
  }

  // return cards by mapping over array. Bp's defined in Row.
  return ( <>
    <h1>Home</h1>
    <Row xs={1} md={2} lg={lgBp} className="g-4">
      {cards.map((card, index) => (
        <Col key={index}>
          <ContentCard title={card.title} text={card.text} image={card.image} link={card.link} />
        </Col>
      ))}
    </Row>
  </>
  )
}


export default Home