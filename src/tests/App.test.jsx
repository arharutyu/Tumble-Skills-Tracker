import '@testing-library/jest-dom'
import { render, screen, noRouterRender, fireEvent } from './TestSetup.js'
import App from '../components/App.jsx'
import Home from '../routes/Home.jsx'
import NavBar from '../components/NavBar.jsx'
import { MemoryRouter } from 'react-router-dom'
import { expect } from 'vitest'

describe('App Component', () => {
  it('renders the login component if not logged in', () => {
    const { container } = render(<App />);

    expect(container.querySelector('h1')).toBeInTheDocument();
    expect(container.querySelector('h1')).toHaveTextContent('Tumble Skills Tracker Login');
  });
})

describe('NavBar Component', () => {
  it('renders', () => {
    render(<NavBar />);

    const navLinks = screen.getAllByRole('link')
    expect(navLinks).toHaveLength(5)

    expect(navLinks[0]).toHaveTextContent('Home')
    expect(navLinks[1]).toHaveTextContent('Students')
    expect(navLinks[2]).toHaveTextContent('Skills')
    expect(navLinks[3]).toHaveTextContent('New Assessment')
    expect(navLinks[4]).toHaveTextContent('Users')

    expect(screen.queryByRole('img')).not.toBeNull()
  })
})

describe('Home Component', () => {
  it('renders the home component', () => {
    const { container } = render(<Home />)

    expect(container.querySelector('h1')).toBeInTheDocument();
    expect(container.querySelector('h1')).toHaveTextContent('Home');
    expect(container.querySelector('h3')).toBeInTheDocument();
    expect(container.querySelector('h3')).toHaveTextContent('Welcome');
  })
})

