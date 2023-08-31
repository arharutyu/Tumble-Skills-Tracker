import '@testing-library/jest-dom'
import { render, screen } from './TestSetup.js'
import App from '../components/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Home from '../routes/Home.jsx'
import Students from '../routes/Students.jsx'

describe('App Component', () => {
    it('renders the login component if not logged in', () => {
      const { container } = render(<App />);
  
      expect(container.querySelector('h1')).toBeInTheDocument();
      expect(container.querySelector('h1')).toHaveTextContent('Tumble Skills Tracker Login');
    });
  })