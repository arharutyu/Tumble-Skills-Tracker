import '@testing-library/jest-dom'
import { render, screen } from './TestSetup.js'
import NewAssessment from '../routes/NewAssessment.jsx'


describe('New Assessment Component', () => {
  it('renders the new assessment component', () => {
    const { container } = render(<NewAssessment />)

    expect(container.querySelector('h1')).toBeInTheDocument();
    expect(container.querySelector('h1')).toHaveTextContent('New Assessment');
    // expect(screen.getByText('Add Student'))
  })
})