import '@testing-library/jest-dom'
import { render, screen } from './TestSetup.js'
import Users from '../routes/Users.jsx'


describe('Users Component', () => {
  it('renders the users header if is admin', () => {
    const { container } = render(<Users isAdmin={true} />)

    expect(container.querySelector('h1')).toBeInTheDocument();
    expect(container.querySelector('h1')).toHaveTextContent('Users');
    // expect(screen.getByText('Add Student'))
  })
})
