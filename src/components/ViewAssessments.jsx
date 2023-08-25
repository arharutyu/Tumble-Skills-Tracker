import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { get } from '../api/api'
import { STUDENTS, ASSESSMENTS } from '../api/endpoints'
import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'
import AdminMenu from '../components/AdminMenu'

const ViewAssessments = ({ assessments, isAdmin }) => {
  
  return (
    <>
      <Accordion defaultActiveKey="0">
    {assessments.length > 0 ? (
      assessments.map((assessment, index) => {
        const skillLevels = []
        assessment.skills.forEach((skill) => {
          skillLevels.push(...skill.skill.levels)
        })
      const uniqueSkillLevels = [...new Set(skillLevels)]
      console.log(uniqueSkillLevels)

        return (
        <Accordion.Item eventKey={index} key={index}>
          <Accordion.Header>
            {new Date(assessment.Date).toLocaleString('en-AU', { dateStyle: 'full', timeStyle: 'short' })}
            </Accordion.Header>
          <Accordion.Body>
                <div>
                <strong>Completed by:</strong> {assessment.doneBy.name}</div>
                <div><strong>Level: </strong>
                {uniqueSkillLevels.map((level, levelIndex) => (
                  <span key={levelIndex}>
                    {levelIndex > 0 && ', '}
                    {level}
                  </span>
                ))}</div>
             
            <Table striped>
              <thead>
              <tr>
                <th>#</th>
                <th>Skill</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
            {assessment.skills.map((skill, skillIndex) => (
                        <tr key={skillIndex}>
                          <td>{skillIndex + 1}</td>
                          <td>{skill.skill.skillName}</td> 
                          <td>{skill.score}</td> 
                        </tr>
                      ))}
            </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>        
      )})
      ) : (
        <p>No assessments found for this student.</p>
      )}
    </Accordion>
    </>
  )
}

export default ViewAssessments