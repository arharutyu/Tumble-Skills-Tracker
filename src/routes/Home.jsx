import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ContentCard from '../components/ContentCard';

const Home = () => {
  return ( <>
    <h1>Home</h1>
    <Row xs={1} md={2} lg={4} className="g-4">
        <Col>
          <ContentCard title="Students" text="See all current students, search for a student, and view inidividual student profiles." image="" link="students" />
        </Col>
        <Col>
          <ContentCard title="Skills" text="skills" image="" link="See all current skills and levels." />
        </Col>
        <Col>
          <ContentCard title="New Assessment" text="Create new assessment." image="" link="new" />
        </Col>
        <Col>
          <ContentCard title="Users" text="See all user details." image="" link="users" />
        </Col>
    </Row>
  </>
  )
}

export default Home