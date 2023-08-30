import '@testing-library/jest-dom'
import { fireEvent, render, screen } from './TestSetup.js'
import NewAssessment from '../routes/NewAssessment.jsx'


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