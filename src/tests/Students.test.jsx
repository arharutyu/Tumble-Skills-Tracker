import '@testing-library/jest-dom'
import { render, screen } from './TestSetup.js'
import Students from '../routes/Students.jsx'
import StudentProfile from '../routes/StudentProfile.jsx'


describe('Students Component', () => {
  it('renders the add student text if is admin', () => {
    const { container } = render(<Students isAdmin={true} />)

    expect(container.querySelector('h1')).toBeInTheDocument();
    expect(container.querySelector('h1')).toHaveTextContent('Students');
    expect(screen.getByText('Add Student'))
  })
  
  it('doesnt render the add student text if not admin', () => {
    const { container } = render(<Students isAdmin={false} />)

    expect(container.querySelector('h1')).toBeInTheDocument();
    expect(container.querySelector('h1')).toHaveTextContent('Students');
    expect(screen.queryByText('Add Student')).toBeNull()
  })
})


