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
          <ContentCard title="Students" text="students" image="" link="students" />
        </Col>
        <Col>
          <ContentCard title="Skills" text="skills" image="" link="skills" />
        </Col>
        <Col>
          <ContentCard title="New Assessment" text="new assessment" image="" link="new" />
        </Col>
        <Col>
          <ContentCard title="Users" text="users" image="" link="users" />
        </Col>
    </Row>
  </>
  )
}

export default Home