import '@testing-library/jest-dom'
import { render, screen, waitFor, fireEvent } from './TestSetup.js'
import userEvent from '@testing-library/user-event'
import App from '../components/App.jsx'
import Users from '../routes/Users.jsx'
import Students from '../routes/Students.jsx'
import StudentProfile from '../routes/StudentProfile.jsx'
import AddStudent from '../routes/AddStudent.jsx'
import EditStudent from '../routes/EditStudent.jsx'
import { describe, expect, it, vi } from 'vitest'
import UserProfile from '../routes/UserProfile.jsx'

let testToken

// Mock matchMedia
window.matchMedia = vi.fn().mockImplementation(query => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  };
});

describe('App Component', () => {
    it('renders the login component if not logged in', () => {
      const { container } = render(<App />)
  
      expect(container.querySelector('h1')).toBeInTheDocument()
      expect(container.querySelector('h1')).toHaveTextContent('Tumble Skills Tracker Login')
    })

    it('tests logging in', async () => {
        const { container } = render(<App />)

        const usernameInput = screen.getByLabelText('Username:')
        const passwordInput = screen.getByLabelText('Password')
        const submitButton = screen.getByRole('button')

        fireEvent.change(usernameInput, { target: { value: 'eliteadmin' } })
        fireEvent.change(passwordInput, { target: { value: 'spameggs' } })

        fireEvent.click(submitButton)
        
    
        await waitFor(() => {
            expect(container.querySelector('h3')).toBeInTheDocument()
            expect(container.querySelector('h3')).toHaveTextContent('Welcome Adam Minister!')

            testToken = sessionStorage.getItem('accessToken')
            console.log(testToken)
          })
      })   
  })

describe('User Component', () => {
  it('renders a list of users for an admin user', async () => {
    const { container } = render(<Users accessToken={testToken} isAdmin={true} />)

    await waitFor(() => {
      expect(container.querySelector('h1')).toBeInTheDocument()
      expect(container.querySelector('h1')).toHaveTextContent('Users')
      expect(container.querySelector('h3')).not.toBeInTheDocument()


      const userCardContainers = container.querySelectorAll('.namefortesting')
      expect(userCardContainers.length).toBeGreaterThan(0)

      const userNames = Array.from(userCardContainers).map(container => container.textContent.trim())
      expect(userNames).toContain('Adam Minister')
      expect(userNames).toContain('Jay Son')
    })
  })

  it('shows a message for a non-admin user', async () => {
    const { container } = render(<Users />)

    await waitFor(() => {
      expect(container.querySelector('h1')).toBeInTheDocument()
      expect(container.querySelector('h1')).toHaveTextContent('Users')
      expect(container.querySelector('h3')).toBeInTheDocument()
      expect(container.querySelector('h3')).toHaveTextContent('You must be an admin to access this resource.')
    })
  })

  it('navigates to user profile when clicked', async () => {
    const { container } = render(<Users accessToken={testToken} isAdmin={true} />)

    await waitFor(() => {
      const usersCardContainers = container.querySelectorAll('.namefortesting')
      expect(usersCardContainers.length).toBeGreaterThan(0)

      const userNames = Array.from(usersCardContainers).map(container => container.textContent.trim())
      expect(userNames).toContain('Adam Minister')
      expect(userNames).toContain('Jay Son')
    })

    const userCard = screen.getByText('Adam Minister')
    fireEvent.click(userCard)
    expect(window.location.pathname).toBe('/users/64ec7d15e801599240bcbeef')
  })

  describe('User Profile Component', () => {
  it('renders with user information and admin button', async () => {
    const { container } = render(<UserProfile accessToken={testToken} isAdmin={true} />, 
    { student: {
      "_id": "64ec7d15e801599240bcbeef",
      "username": "eliteadmin",
      "name": "Adam Minister",
      "isAdmin": true,
      "__v": 0
    }}) 

    await waitFor(() => {
      expect(container.querySelector('h1')).toBeInTheDocument()
      expect(container.querySelector('h1')).toHaveTextContent('User:')
      expect(container.querySelector('#admin')).toBeInTheDocument()
    })
  })
  })
})

describe('Student Component', () => {
  it('renders a list of students for an admin user', async () => {
    const { container } = render(<Students accessToken={testToken} isAdmin={true} />)

    await waitFor(() => {
      expect(container.querySelector('h1')).toBeInTheDocument()
      expect(container.querySelector('h1')).toHaveTextContent('Students')
      expect(container.querySelector('h3')).not.toBeInTheDocument()
      

      const studentCardContainers = container.querySelectorAll('.namefortesting')
      expect(studentCardContainers.length).toBeGreaterThan(0)

      const studentNames = Array.from(studentCardContainers).map(container => container.textContent.trim())
      expect(studentNames).toContain('Lachie')
      expect(studentNames).toContain('Max')
      expect(studentNames).toContain('Argine')
      
    })
  })

  it('navigates to student profile when clicked', async () => {
    const { container } = render(<Students accessToken={testToken} isAdmin={true} />)

    await waitFor(() => {
      const studentCardContainers = container.querySelectorAll('.namefortesting')
      expect(studentCardContainers.length).toBeGreaterThan(0)

      const studentNames = Array.from(studentCardContainers).map(container => container.textContent.trim())
      expect(studentNames).toContain('Lachie')
      expect(studentNames).toContain('Max')
      expect(studentNames).toContain('Argine')
    })

    const studentCard = screen.getByText('Lachie')
    fireEvent.click(studentCard)
    expect(window.location.pathname).toBe('/students/64ec7d15e801599240bcbef2')
  })

  describe('Student Profile Component', () => {
  it('renders with student information and admin button if admin', async () => {
    const { container } = render(<StudentProfile accessToken={testToken} isAdmin={true} />, { student: {
      "_id": "64ec7d15e801599240bcbef2",
      "name": "Lachie",
      "DOB": "1996-09-04T00:00:00.000Z",
      "skillLevel": 6,
      "__v": 0
    }}) 

    await waitFor(() => {
      expect(container.querySelector('h1')).toBeInTheDocument()
      expect(container.querySelector('h1')).toHaveTextContent('Student')
      expect(screen.getByText('Student Information')).toBeInTheDocument()
      expect(screen.getByText('Assessments')).toBeInTheDocument()
      expect(container.querySelector('#admin')).toBeInTheDocument()
    })
  })
  it('renders with student information and without admin button for non admins', async () => {
    const { container } = render(<StudentProfile accessToken={testToken} isAdmin={false} />, { student: {
      "_id": "64ec7d15e801599240bcbef2",
      "name": "Lachie",
      "DOB": "1996-09-04T00:00:00.000Z",
      "skillLevel": 6,
      "__v": 0
    }}) 

    await waitFor(() => {
      expect(container.querySelector('h1')).toBeInTheDocument()
      expect(container.querySelector('h1')).toHaveTextContent('Student')
      expect(screen.getByText('Student Information')).toBeInTheDocument()
      expect(screen.getByText('Assessments')).toBeInTheDocument()
      expect(container.querySelector('#admin')).not.toBeInTheDocument()
    })
  })
  })

  //   await waitFor(() => {
  //     expect(container.querySelector('h1')).toBeInTheDocument()
  //     expect(container.querySelector('h1')).toHaveTextContent('Students')
  //     expect(container.querySelector('h3')).toBeInTheDocument()
  //     expect(container.querySelector('h3')).toHaveTextContent('You must be an admin to access this resource.')
  //   })
  // })
})

describe('Add a new student', () => {
  it('adds a new student', async () => {
    const user = userEvent.setup()
    const { container } = render(<AddStudent accessToken={testToken} isAdmin={true}/>)
  
    const nameInput = screen.getByLabelText('Name:')
    const dobInput = screen.getByLabelText('Date of Birth:')
    const skillLevelDropdown = screen.getByTestId('skill-level-dropdown')
    const submitButton = screen.getByText('Submit')

    expect(nameInput).toBeInTheDocument()
    expect(dobInput).toBeInTheDocument()
    expect(skillLevelDropdown).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })
})

describe('edit students', () => {
  it('renders the edit student component for an admin user', () => {
    const { container } = render(<EditStudent accessToken={testToken} isAdmin={true}/>)
    expect(container.querySelector('h1')).toBeInTheDocument()
    expect(container.querySelector('h1')).toHaveTextContent('Update Student')
  })

  it('renders a forbidden access message for non admins', () => {
    const { container } = render(<EditStudent />)
    expect(container.querySelector('h3')).toBeInTheDocument()
    expect(container.querySelector('h3')).toHaveTextContent('You must be an admin to access this resource.')
  })
})
