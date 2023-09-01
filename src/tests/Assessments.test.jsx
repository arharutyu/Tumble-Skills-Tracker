import '@testing-library/jest-dom'
import { fireEvent, render, screen } from './TestSetup.js'
import NewAssessment from '../routes/NewAssessment.jsx'
import { describe, expect, it } from 'vitest'
import StartAssessment from '../routes/StartAssessment.jsx'
import StartButton from '../components/StartButton.jsx'
import ViewAssessments from '../components/ViewAssessments.jsx'

describe('New Assessment Component', () => {
  it('renders the new assessment component', () => {
    render(<NewAssessment />)

    const searchBar = screen.getByRole('textbox', { id: 'input-text' })
    const levelDropdown = screen.getByRole('button', { name: 'Choose a level' })
    
    expect(screen.getByText('New Assessment')).toBeInTheDocument()
    expect(searchBar).toBeInTheDocument()
    expect(levelDropdown).toBeInTheDocument()
  })

  it('renders the skills when a level is chosen', () => {
    render(<NewAssessment />)
    const levelDropdown = screen.getByRole('button', { name: 'Choose a level' })
    expect(levelDropdown).toBeInTheDocument()

    fireEvent.change(levelDropdown, { target: { value: '1' } });
    // TODO: Finish so this actually tests
  })
})

describe('Start Assessment component', () => {
 it('renders with assessment columns and submit button', () => {
    render(<StartAssessment />)
    const columnHeaderElements = screen.queryAllByRole('columnheader')

    expect(screen.getByRole('button', {name: "Submit Assessment"})).toBeInTheDocument()
    expect(columnHeaderElements).toHaveLength(7)
  }) 
})

describe('Start Assessment Button', () => {
 it('renders with text', () => {
    render(<StartButton />)
    expect(screen.getByRole('button', {name: "Start Assessment"})).toBeInTheDocument()
  }) 
})

describe('View Assessment accordion', () => {
  const assessments = [{
        "_id": "64ec7d15e801599240bcbf11",
        "student": {
            "_id": "64ec7d15e801599240bcbef2",
            "name": "Lachie"
        },
        "doneBy": {
            "_id": "64ec7d15e801599240bcbef0",
            "name": "Jay Son"
        },
        "skills": [
            {
                "skill": {
                    "_id": "64ec7d14e801599240bcbed5",
                    "skillName": "Handstand",
                    "levels": [
                        0
                    ]
                },
                "score": 5,
                "_id": "64ec7d15e801599240bcbf12"
            },
            {
                "skill": {
                    "_id": "64ec7d14e801599240bcbed6",
                    "skillName": "Cartwheel",
                    "levels": [
                        0,
                        1
                    ]
                },
                "score": 5,
                "_id": "64ec7d15e801599240bcbf13"
            }
        ],
        "isCompleted": true,
        "Date": "2022-01-01T00:00:00.000Z",
        "__v": 0
    }] 
 
  // it('renders with assessments', () => {
  //   render(<ViewAssessments isAdmin={true} assessments={assessments} />)
  //   expect(screen.getByRole('heading', {name: "Saturday, 1 January 2022 at 11:00 am"})).toBeInTheDocument()
  //   expect(screen.getByRole('button', {name: "Saturday, 1 January 2022 at 11:00 am"})).toBeInTheDocument()
  //   expect(screen.queryAllByRole('row')).toHaveLength(3)
  //   expect(screen.queryAllByRole('columnheader')).toHaveLength(3)
  // }) 
 
  it('renders with admin buttons if admin', () => {
    render(<ViewAssessments isAdmin={true} assessments={assessments} />)
    expect(screen.getByRole('button', {name: "Edit Assessment"})).toBeInTheDocument()
    expect(screen.getByRole('button', {name: "Delete Assessment"})).toBeInTheDocument()
  }) 

  it('doesnt render admin buttons if not admin', () => {
    render(<ViewAssessments isAdmin={false} assessments={assessments} />)
    expect(screen.queryByRole('button', {name: "Edit Assessment"})).toBeNull()
    expect(screen.queryByRole('button', {name: "Delete Assessment"})).toBeNull()
  }) 
})

