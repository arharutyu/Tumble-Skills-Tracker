import '@testing-library/jest-dom'
import { render, screen } from './TestSetup.js'
import Skills from '../routes/Skills.jsx'

const mockData = [
    { _id: '1', skillName: 'Skill 1', level: 0 },
    { _id: '2', skillName: 'Skill 2', level: 0 },
    { _id: '3', skillName: 'Skill 3', level: 1 },
    { _id: '4', skillName: 'Skill 4', level: 1 },
    { _id: '5', skillName: 'Skill 5', level: 2 },
    { _id: '6', skillName: 'Skill 6', level: 2 },
    { _id: '7', skillName: 'Skill 7', level: 3 },
    { _id: '8', skillName: 'Skill 8', level: 3 },
  ];

describe('Skills Component', () => {
    it('renders the skills component', () => {
      const { container } = render(<Skills />)
  
      expect(container.querySelector('h1')).toBeInTheDocument()
      expect(container.querySelector('h1')).toHaveTextContent('Skills')
    })

    it ('skillsz', () => {
        const { container } = render(<Skills />)

        expect(container.querySelector('h2')).toBeInTheDocument()
        expect(container.querySelector('h2')).toHaveTextContent('Beginner / Novice Skills')
        expect(container.querySelector('ul')).toHaveTextContent('Cartwheel')
        // expect(container.querySelector('h2:nth-of-type(2)')).toBeInTheDocument()
        // expect(container.querySelector('h2:nth-of-type(2)')).toHaveTextContent('Intermediate Skills')
    })


    
    it('renders four different lists of skills', () => {
        const mockData = [
            { _id: '1', skillName: 'Skill 1', level: 0 },
            { _id: '2', skillName: 'Skill 2', level: 0 },
            { _id: '3', skillName: 'Skill 3', level: 1 },
            { _id: '4', skillName: 'Skill 4', level: 1 },
            { _id: '5', skillName: 'Skill 5', level: 2 },
            { _id: '6', skillName: 'Skill 6', level: 2 },
            { _id: '7', skillName: 'Skill 7', level: 3 },
            { _id: '8', skillName: 'Skill 8', level: 3 },
          ]

        const { container } = render(<Skills accessToken="your-access-token" />, {
        
            mockData,
        })

        mockData.forEach(skill => {
            const level = skill.level
            const listElement = container.querySelector(`ul[data-level="${level}"]`)
            const skillNameElement = screen.getByText(skill.skillName)
            

            expect(listElement).toBeInTheDocument()
            expect(skillNameElement).toBeInTheDocument()
            expect(skillNameElement).toHaveTextContent(skill.skillName)
        })
    })
  })