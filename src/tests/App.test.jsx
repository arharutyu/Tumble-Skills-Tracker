import '@testing-library/jest-dom'
import { render, screen } from './TestSetup.js'
import App from '../components/App.jsx'
import Home from '../routes/Home.jsx'

describe('App Component', () => {
  it('renders the login component if not logged in', () => {
    const { container } = render(<App />);

    expect(container.querySelector('h1')).toBeInTheDocument();
    expect(container.querySelector('h1')).toHaveTextContent('Tumble Skills Tracker Login');
  });
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

