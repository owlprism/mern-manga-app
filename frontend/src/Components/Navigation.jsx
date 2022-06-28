import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap"; 
import logo from '../logo.svg'

const Navigation = () => {
    return (
        <div className="App">
          <Navbar class="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/"><img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Anime">Anime</Nav.Link>
                <Nav.Link href="/Students">Students</Nav.Link>
                <Nav.Link href="/SW">SW</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    );
}


export default Navigation; 