import '@testing-library/jest-dom'
import { fireEvent, render, screen } from './TestSetup.js'
import NewAssessment from '../routes/NewAssessment.jsx'
import { describe, expect, it } from 'vitest'
import StartAssessment from '../routes/StartAssessment.jsx'
import StartButton from '../components/StartButton.jsx'

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
 it('renders with assessment columns and submit button', () => {
    render(<StartButton />)
    expect(screen.getByRole('button', {name: "Start Assessment"})).toBeInTheDocument()
  }) 
})

