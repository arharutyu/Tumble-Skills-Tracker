import '@testing-library/jest-dom'
import { render, screen, waitFor, fireEvent } from './TestSetup.js'
import App from '../components/App.jsx'
import Users from '../routes/Users.jsx'
import Students from '../routes/Students.jsx'

let testToken

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

  // it('shows a message for a non-admin user viewing students', async () => {
  //   const { container } = render(<Students />)

  //   await waitFor(() => {
  //     expect(container.querySelector('h1')).toBeInTheDocument()
  //     expect(container.querySelector('h1')).toHaveTextContent('Students')
  //     expect(container.querySelector('h3')).toBeInTheDocument()
  //     expect(container.querySelector('h3')).toHaveTextContent('You must be an admin to access this resource.')
  //   })
  // })
})
