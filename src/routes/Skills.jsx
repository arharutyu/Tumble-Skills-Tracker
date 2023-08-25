import React, {useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import '../components/App.css'
import { get } from '../api/api.js'
import { SKILLS } from '../api/endpoints.js'

const Skills = ({ accessToken }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await get(SKILLS, accessToken)
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const levels = [0, 1, 2, 3] 
  const skillsByLevel = {}

  levels.forEach(level => {
    skillsByLevel[level] = data.filter(skill => skill.levels.includes(level))
  });

  return (<>
  <Container className="contcontainer">
    <h1>Skills</h1>
    <Accordion alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Beginner / Novice Skills</Accordion.Header>
        <Accordion.Body>
        <ul className="left-aligned-list">
                {skillsByLevel[0].map(skill => (
                  <li key={skill._id}>{skill.skillName}</li>
                ))}
              </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Intermediate Skills</Accordion.Header>
        <Accordion.Body>
        <ul className="left-aligned-list">
                {skillsByLevel[1].map(skill => (
                  <li key={skill._id}>{skill.skillName}</li>
                ))}
              </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Advanced Skills</Accordion.Header>
        <Accordion.Body>
        <ul className="left-aligned-list">
                {skillsByLevel[2].map(skill => (
                  <li key={skill._id}>{skill.skillName}</li>
                ))}
              </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Elite Skills</Accordion.Header>
        <Accordion.Body>
        <ul className="left-aligned-list">
                {skillsByLevel[3].map(skill => (
                  <li key={skill._id}>{skill.skillName}</li>
                ))}
              </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </Container>
  
  </>
  )
}

export default Skills
