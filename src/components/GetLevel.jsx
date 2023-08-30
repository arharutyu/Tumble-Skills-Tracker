import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { skills } from '../api/api'
import ListGroup from 'react-bootstrap/ListGroup'

const GetLevel = ({setAssessSkills, assessSkills}) => {
  const [level, setLevel] = useState('')

  // Effect to fetch assessment skills based on the selected level
  useEffect(() => {
    // Check if the selected level is a valid integer
    if (Number.isInteger(level)) {
      (async () => {
        // Fetch skills based on the selected level and update assessSkills state
        let res = await skills(level)
        setAssessSkills(res)
      })()
    }
  }, [level])

  return (
    <>
      <DropdownButton id="dropdown-basic-button" title={level === 0 ? 'Novice' : level ? `Level: ${level}` : "Choose a level"}>
        <Dropdown.Item onClick={() => setLevel(0)}>Novice</Dropdown.Item>
        <Dropdown.Item onClick={() => setLevel(1)}>Level 1</Dropdown.Item>
        <Dropdown.Item onClick={() => setLevel(2)}>Level 2</Dropdown.Item>
        <Dropdown.Item onClick={() => setLevel(3)}>Level 3</Dropdown.Item>
      </DropdownButton>

      {assessSkills.length > 0 ? (
      <ListGroup>
      {assessSkills.map((skill, index) =>(
        <ListGroup.Item key={index}>{skill.skillName}</ListGroup.Item>
        ))}
      </ListGroup>
       ) : (
        <p>No skills available for this level.</p>
      )}
    </>
  )
}

export default GetLevel