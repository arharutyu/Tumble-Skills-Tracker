import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'

const NavBar = () => {
  return (
    <Navbar className="navbar-custom" expand="md" fixed="top" >
        <Navbar.Brand href="#home" className="custom-logo"><img src="https://eliteallstars.com.au/wp-content/uploads/2019/06/eliteAsset-2.png" alt="Logo" width="100"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container>
          <Nav fill variant="pills" className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/students">Students</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav.Link href="/new">New Assessment</Nav.Link>
            <Nav.Link href="/users" eventKey="disabled" disabled>Users</Nav.Link>
          </Nav>
          </Container>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar