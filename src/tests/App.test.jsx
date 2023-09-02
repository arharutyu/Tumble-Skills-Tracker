import '@testing-library/jest-dom'
import { render, screen } from './TestSetup.js'
import App from '../components/App.jsx'
import Home from '../routes/Home.jsx'
import NavBar from '../components/NavBar.jsx'

describe('App Component', () => {
  it('renders the login component if not logged in', () => {
    render(<App />);

    expect(screen.getByRole('heading', {name: 'Tumble Skills Tracker Login'})).toBeInTheDocument();
  });
})


describe('NavBar Component', () => {
  it('renders', () => {
    render(<NavBar />);

    const navLinks = screen.getAllByRole('link')
    expect(navLinks).toHaveLength(6)

    expect(navLinks[1]).toHaveTextContent('Home')
    expect(navLinks[2]).toHaveTextContent('Students')
    expect(navLinks[3]).toHaveTextContent('Skills')
    expect(navLinks[4]).toHaveTextContent('New Assessment')
    expect(navLinks[5]).toHaveTextContent('Users')

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
