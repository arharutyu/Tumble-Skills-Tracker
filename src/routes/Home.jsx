import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ContentCard from '../components/ContentCard';
import Container from 'react-bootstrap/Container'
import studentsIcon from '../assets/students.png'
import skillsIcon from '../assets/skills.png'
import assessmentIcon from '../assets/assessment.png'
import usersIcon from '../assets/users.png'

const Home = ({isAdmin, name}) => {
  // Cards to render for all user types
  let cards = [{
    title: "Students", 
    text:"See all current students, search for a student, and view inidividual student profiles.",
    image: studentsIcon,
    link:"students"
  },
  {
    title: "Skills", 
    text:"See all current skills and levels.",
    image:skillsIcon,
    link:"skills"
  },
  {
    title: "New Assessment", 
    text:"Create new assessment.",
    image: assessmentIcon,
    link:"new"
  }
  ]

  // Admin only cards
  const usersCard =   {
    title: "Users", 
    text:"See all user details.",
    image: usersIcon,
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
  <Container className="contcontainer">
    <h1>Home</h1>
    <h3>Welcome {name}!</h3>
    <Row xs={1} md={2} lg={lgBp} className="g-4">
      {cards.map((card, index) => (
        <Col key={index}>
          <ContentCard title={card.title} text={card.text} image={card.image} link={card.link} />
        </Col>
      ))}
    </Row>
    </Container>
  </>
  )
}


export default Home