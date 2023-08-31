import '@testing-library/jest-dom'
import { render, screen, waitFor, fireEvent } from './TestSetup.js'
import App from '../components/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Home from '../routes/Home.jsx'
import Students from '../routes/Students.jsx'
import { expect } from 'vitest'

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
          })
      
      })
  })

