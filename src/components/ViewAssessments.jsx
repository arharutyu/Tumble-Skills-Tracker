import React, { useState } from 'react'
import { put, del } from '../api/api'
import { STUDENTS, ASSESSMENTS } from '../api/endpoints'
import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const ViewAssessments = ({ assessments, isAdmin, accessToken, fetchAssessments }) => {
  // State for tracking edit mode and edited assessments
  const [editModeIndex, setEditModeIndex] = useState(null)
  const [editedAssessments, setEditedAssessments] = useState([])

  // Function to handle clicking on the "Edit Assessment" button
  const handleEditClick = (assessmentId, index) => {
    // Set the edit mode index to the clicked assessment index
    setEditModeIndex(index)
    // Copy the current assessments to be edited
    setEditedAssessments([...assessments])
  }

  // Copy the current assessments to be edited
  const handleDeleteClick = (assessmentId, index) => {
    const confirmed = window.confirm("Are you sure you want to delete this assessment?")
    if (confirmed) {
    // Call API to delete the assessment
    del(ASSESSMENTS, assessmentId, accessToken)
    // Fetch updated assessments after deletion
    .then(() => {
      fetchAssessments()
    })
    .catch((error) => {
      console.error('Error while deleting assessment:', error)
    })
}
  }

  // Function to handle changes in input fields during editing
  const handleInputChange = (event, assessmentIndex, skillIndex) => {
    const { name, value } = event.target
    const updatedAssessments = [...editedAssessments]
    updatedAssessments[assessmentIndex].skills[skillIndex].score = value
    setEditedAssessments(updatedAssessments)
  }

  // Function to cancel the editing mode
  const handleCancelEdit = () => {
    setEditModeIndex(null)
    setEditedAssessments([])
  }

  // Function to save changes after editing
  const handleSaveChanges = async (assessmentId, index) => {
  try {
    // Get the updated assessment to be saved
    const updatedAssessment = editedAssessments[index]
    // Call API to update the assessment
    await put(`${ASSESSMENTS}/${assessmentId}`, updatedAssessment, accessToken)
    // Exit edit mode and fetch updated assessments
    setEditModeIndex(null)
    setEditedAssessments([])
    fetchAssessments()
  } catch (error) {
    console.error('Error while saving changes:', error)
  }
}
// Render the assessment items in an accordion
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