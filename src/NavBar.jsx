import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top" >
        <Navbar.Brand href="#home"><img src="https://eliteallstars.com.au/wp-content/uploads/2019/06/eliteAsset-2.png" alt="Logo" width="100"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" defaultActiveKey="/home" className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Students</Nav.Link>
            <Nav.Link href="#link">Skills</Nav.Link>
            <Nav.Link href="#link">New Assessment</Nav.Link>
            <Nav.Link href="#link" eventKey="disabled" disabled>Users</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar