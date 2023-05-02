import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <div>
        <h5></h5>
      </div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Food World</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Blog </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/*evabe update krte hbe user?{user.photUrl}:<button>Login</button> */}
          <button>Login</button>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
