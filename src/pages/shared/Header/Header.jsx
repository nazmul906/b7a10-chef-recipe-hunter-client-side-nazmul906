import React, { useContext } from "react";
import { Button, Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useState } from "react";
import "./header.css";
const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [showName, setShowName] = useState(false);
  const handleMouseEnter = () => {
    setShowName(true);
  };

  const handleMouseLeave = () => {
    setShowName(false);
  };
  const handleLogout = () => {
    logout()
      .then()
      .catch((error) => console.log(error));
  };
  // const bgColor = {
  //   backgroundColor: "black",
  // };
  return (
    <Container>
      <Navbar expand="lg" bg="dark" text="white" className="my-navbar">
        {/* <Container> */}
        <Navbar.Brand style={{ color: "white" }}>Food World</Navbar.Brand>
        <Navbar.Toggle
          style={{ color: "white" }}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* activeclassname="active" */}
            <Nav.Link style={{ color: "white" }} href="/">
              Home
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="/blog">
              Blog{" "}
            </Nav.Link>
          </Nav>
          <Nav>
            {user && (
              <NavLink>
                {/* <Nav.Link href="#link">{user.displayName} </Nav.Link> */}
                {/* <p>User:{user.displayName}</p>
                  <img src={user.photoURL} height="40" width="40"></img> */}
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img src={user.photoURL} height="40" width="40"></img>
                  {showName && (
                    <p style={{ color: "white" }}>{user.displayName}</p>
                  )}
                </div>
              </NavLink>
            )}
            <NavLink activeclassname="active">
              {user ? (
                <Button onClick={handleLogout}>logout</Button>
              ) : (
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
              )}
            </NavLink>
            {/* <Link to="/login">
                <Button>Login</Button>
              </Link> */}
          </Nav>
        </Navbar.Collapse>
        {/*evabe update krte hbe user?{user.photUrl}:<button>Login</button> */}
        {/* </Container> */}
      </Navbar>
    </Container>
  );
};

export default Header;
