import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'

const NavBar = ({isAdmin}) => {
  return (
    <Navbar className="navbar-custom" expand="md" fixed="top" >
        <Navbar.Brand className="custom-logo"><img src="https://eliteallstars.com.au/wp-content/uploads/2019/06/eliteAsset-2.png" alt="Logo" width="100"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container>
          <Nav fill variant="pills" className="me-auto">
            <Nav.Link as={NavLink} to="/" exact activeClassName="active-link">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/students" activeClassName="active-link">Students</Nav.Link>
            <Nav.Link as={NavLink} to="/skills" activeClassName="active-link">Skills</Nav.Link>
            <Nav.Link as={NavLink} to="/new" activeClassName="active-link">New Assessment</Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/users" 
              activeClassName="active-link"
              disabled={!isAdmin}
              >Users</Nav.Link>
          </Nav>
          </Container>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar