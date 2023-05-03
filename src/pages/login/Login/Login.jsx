/* eslint-disable react/no-unknown-property */
import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state.from.pathname || "/";
  console.log("log", from);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        // navigate("/");
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="name@example.com"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control
          type="passwod"
          name="password"
          placeholder="password"
          required
          // rows={3}
        />
      </Form.Group>
      <button variant="primary" type="submit">
        Login
      </button>
      <p>
        dont have an account{" "}
        <Link to="/register">
          <button>Register</button>
        </Link>
      </p>
    </Form>
  );
};

export default Login;
