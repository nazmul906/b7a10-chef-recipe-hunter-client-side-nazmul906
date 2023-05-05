/* eslint-disable react/no-unknown-property */
import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";
  // console.log("log", from);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);
    if (password.length < 6) {
      setError("password must be 6 or more character");
    } else {
      signIn(email, password)
        .then((result) => {
          const loggedInUser = result.user;
          console.log(loggedInUser);
          // navigate("/");
          form.reset();
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
        });
    }
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const googleuser = result.user;
        console.log("google", googleuser);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log("error", error.message));
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        const gituser = result.user;
        console.log("gituser", gituser);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log("error", error.message));
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

      <Button variant="primary" type="submit">
        Login
      </Button>
      <p className="text-danger">{error}</p>
      <div className="d-flex ">
        <p className="me-3">
          <small>dont have an account? please Register first..</small>
        </p>
        <Link to="/register">
          <Button>Register</Button>
        </Link>
      </div>

      <button
        className="me-2"
        variant="primary"
        type="submit"
        onClick={handleGoogleSignIn}
      >
        <FcGoogle></FcGoogle>
        Google
      </button>

      <button variant="primary" type="submit" onClick={handleGithubSignIn}>
        <BsGithub></BsGithub> Github
      </button>
    </Form>
  );
};

export default Login;
