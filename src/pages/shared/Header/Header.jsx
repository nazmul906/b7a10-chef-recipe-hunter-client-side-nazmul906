import React, { useContext } from "react";
import { Button, Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
const Header = () => {
  const { user } = useContext(AuthContext);

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
            <Nav>
              {user && (
                <NavLink>
                  <Nav.Link href="#link">{user.displayname} </Nav.Link>
                </NavLink>
              )}
              {/* <NavLink>
                {user ? (
                  <button>logout</button>
                ) : (
                  <Link to="/login">
                    <Button>Login</Button>
                  </Link>
                )}
              </NavLink> */}
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
          {/*evabe update krte hbe user?{user.photUrl}:<button>Login</button> */}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
