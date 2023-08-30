import '@testing-library/jest-dom'
import { render, screen, waitFor, fireEvent } from './TestSetup.js'
import Skills from '../routes/Skills.jsx'
import { expect } from 'vitest'

describe('Skills Component', () => {
    it('renders the skills component', async () => {
      const { container } = render(<Skills />)
  
      expect(container.querySelector('h1')).toBeInTheDocument()
      expect(container.querySelector('h1')).toHaveTextContent('Skills')
      expect(screen.getByText('Beginner / Novice Skills'))
      
    })

    it('renders skills ', async () => {
      const { container } = render(<Skills />)

      await waitFor(() => {
        expect(screen.getByText('Handstand')) 
        expect(screen.getAllByText('Cartwheel')) 
        expect(screen.getByText('Front Limber')) 
        expect(screen.getAllByText('Round Off')) 
        expect(screen.getAllByText('Punch Dive Roll')) 
        expect(screen.getAllByText('Front Handspring')) 
      })
    })

    it('opens and closes accordion when clicked', async () => {
      render(<Skills />)

      const beginnerAccordion = screen.getByText(/Beginner \/ Novice Skills/i)
      expect(beginnerAccordion).toBeInTheDocument()

      fireEvent.click(beginnerAccordion)

      const beginnerSkills = ['Handstand', 'Cartwheel', 'Front Limber']
      beginnerSkills.forEach(skill => {
        const skillElement = screen.queryByText(new RegExp(skill, 'i'))
        if (skillElement) {
          expect(skillElement).toBeInTheDocument();
        }
      })

      fireEvent.click(beginnerAccordion)

      beginnerSkills.forEach(skill => {
        expect(screen.queryByText(skill)).not.toBeInTheDocument()
      })
    })
  })