import React, { useState } from 'react'
import { put, del } from '../api/api'
import { STUDENTS, ASSESSMENTS } from '../api/endpoints'
import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const ViewAssessments = ({ assessments, isAdmin, accessToken, fetchAssessments }) => {
  const [editModeIndex, setEditModeIndex] = useState(null)
  const [editedAssessments, setEditedAssessments] = useState([])

  const handleEditClick = (assessmentId, index) => {
    setEditModeIndex(index)
    setEditedAssessments([...assessments])
  }

  const handleDeleteClick = (assessmentId, index) => {
    del(ASSESSMENTS, assessmentId, accessToken)
    fetchAssessments()
  }

  const handleInputChange = (event, assessmentIndex, skillIndex) => {
    const { name, value } = event.target
    const updatedAssessments = [...editedAssessments]
    updatedAssessments[assessmentIndex].skills[skillIndex].score = value
    setEditedAssessments(updatedAssessments)
  }

  const handleCancelEdit = () => {
    setEditModeIndex(null)
    setEditedAssessments([])
  }

  const handleSaveChanges = async (assessmentId, index) => {
  try {
    const updatedAssessment = editedAssessments[index]
    await put(`${ASSESSMENTS}/${assessmentId}`, updatedAssessment, accessToken)
    setEditModeIndex(null)
    setEditedAssessments([])
    fetchAssessments()
  } catch (error) {
    console.error('Error while saving changes:', error)
  }
}
  return (
    <Accordion defaultActiveKey="0">
      {assessments.length > 0 ? (
        assessments.map((assessment, index) => {
          const skillLevels = []
        assessment.skills.forEach((skill) => {
          skillLevels.push(...skill.skill.levels)
        })
      const uniqueSkillLevels = [...new Set(skillLevels)]
      console.log(uniqueSkillLevels)

          const isEditMode = index === editModeIndex;

          return (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>
                {new Date(assessment.Date).toLocaleString('en-AU', {
                  dateStyle: 'full',
                  timeStyle: 'short',
                })}
                
              </Accordion.Header>
              <Accordion.Body>
              {isAdmin && !isEditMode && (
                <>
                  <Button
                    variant="link"
                    onClick={() => handleEditClick(assessment._id, index)}
                  >
                    Edit Assessment
                  </Button>
                  <Button
                    variant="link"
                    onClick={() => handleDeleteClick(assessment._id, index)}
                  >
                    Delete Assessment
                  </Button>
                  </>
                )}
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
                        <td>
                          {isEditMode ? (
                            <input
                              type="number"
                              name="score"
                              value={
                                editedAssessments[index]?.skills[skillIndex]
                                  ?.score || skill.score
                              }
                              onChange={(event) =>
                                handleInputChange(event, index, skillIndex)
                              }
                            />
                          ) : (
                            skill.score
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                {isEditMode && (
                  <div>
                    <Button variant="secondary" onClick={handleCancelEdit}>
                      Cancel
                    </Button>
                    <Button variant="primary" onClick={() => handleSaveChanges(assessment._id, index)}>
                      Save Changes
                    </Button>
                  </div>
                )}
              </Accordion.Body>
            </Accordion.Item>
          );
        })
      ) : (
        <p>No assessments found for this student.</p>
      )}
    </Accordion>
  );
};

export default ViewAssessments;