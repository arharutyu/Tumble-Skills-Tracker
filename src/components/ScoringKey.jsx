import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ScoringKey = () => {
  const scores = [
    { abbr: 'At', desc: 'Attempted', score: 0},
    { abbr: 'WT', desc: 'Working Towards', score: 1},
    { abbr: 'A', desc: 'Acceptable', score: 2},
    { abbr: 'EE', desc: 'Exceeds Expectations', score: 3},
    { abbr: 'O', desc: 'Outstanding', score: 4}
  ]
  return (
    <>
        <Container>
          <Row className="justify-content-md-center">Scoring Key</Row>
          <Row className="justify-content-md-center" xs="1" md="3" lg="5">
            {scores.map((score) => (
            <Col>
              {score.abbr} | {score.desc} : {score.score}
            </Col>
            ))}
          </Row>
        </Container>
    </>
  )
}

export default ScoringKey