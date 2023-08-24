import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { skills } from '../api/api'
import ListGroup from 'react-bootstrap/ListGroup'

const GetLevel = ({setAssessSkills, assessSkills}) => {
  // const [assessSkills, setAssessSkills] = useState([])
  const [level, setLevel] = useState('')

  useEffect(() => {
    if (Number.isInteger(level)) {
      (async () => {
        let res = await skills(level)
        setAssessSkills(res)
      })()
    }
  }, [level])

  return (
    <>
      <DropdownButton id="dropdown-basic-button" title={level ? `Level: ${level}` : "Choose a level"}>
        <Dropdown.Item onClick={() => setLevel(1)}>Level 1</Dropdown.Item>
        <Dropdown.Item onClick={() => setLevel(2)}>Level 2</Dropdown.Item>
        <Dropdown.Item onClick={() => setLevel(3)}>Level 3</Dropdown.Item>
        <Dropdown.Item onClick={() => setLevel(4)}>Level 4</Dropdown.Item>
        <Dropdown.Item onClick={() => setLevel(5)}>Level 5</Dropdown.Item>
        <Dropdown.Item onClick={() => setLevel(6)}>Level 6</Dropdown.Item>
      </DropdownButton>

      <ListGroup>
      {assessSkills.map((skill, index) =>(
        <ListGroup.Item key={index}>{skill.skillName}</ListGroup.Item>
        ))}
      </ListGroup>
    </>
  )
}

export default GetLevel