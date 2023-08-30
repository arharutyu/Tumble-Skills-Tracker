import '@testing-library/jest-dom'
import { render, screen } from './TestSetup.js'
import Users from '../routes/Users.jsx'
import { describe, expect, it } from 'vitest'
import EditUser from '../routes/EditUser.jsx'
import AddUser from '../routes/AddUser.jsx'


describe('Users Component', () => {
  it('renders the users header if is admin', () => {
    const { container } = render(<Users isAdmin={true} />)

    expect(container.querySelector('h1')).toBeInTheDocument();
    expect(container.querySelector('h1')).toHaveTextContent('Users');
  })
})

describe('edit user component', () => {
  it('renders the edit user component if is admin', () => {
    const { container } = render(<EditUser isAdmin={true} />)

    expect(container.querySelector('h1')).toBeInTheDocument()
    expect(container.querySelector('h1')).toHaveTextContent('Update User')

    const name = screen.getByText('Name:')
    const username = screen.getByText('Username:')
    const password = screen.getByText('Password:')
    const admin = screen.getByText('Admin:')

    expect(name).toBeInTheDocument()
    expect(username).toBeInTheDocument()
    expect(password).toBeInTheDocument()
    expect(admin).toBeInTheDocument()
    expect(container.querySelector('input[type="checkbox"]')).toBeInTheDocument()
  })

  it('renders a forbidden access message if not is admin', () => {
    const { container } = render(<EditUser isAdmin={false} />)

    expect(container.querySelector('h3')).toBeInTheDocument()
    expect(container.querySelector('h3')).toHaveTextContent('You must be an admin to access this resource.')
  })
})

describe('add user component', () => {
  it('renders the add user component if is admin', () => {
    const { container } = render(<AddUser isAdmin={true} />)

    expect(container.querySelector('h1')).toBeInTheDocument()
    expect(container.querySelector('h1')).toHaveTextContent('Add New User')

    const addName = screen.getByText('Name:')
    const addUsername = screen.getByText('Username:')
    const addPassword = screen.getByText('Password:')
    const addAdmin = screen.getByText('Admin:')

    expect(addName).toBeInTheDocument()
    expect(addUsername).toBeInTheDocument()
    expect(addPassword).toBeInTheDocument()
    expect(addAdmin).toBeInTheDocument()
    expect(container.querySelector('input[type="checkbox"]')).toBeInTheDocument()
  })

  it('renders a forbidden access message if not is admin', () => {
    const { container } = render(<AddUser isAdmin={false} />)

    expect(container.querySelector('h3')).toBeInTheDocument()
    expect(container.querySelector('h3')).toHaveTextContent('You must be an admin to access this resource.')
  })
})