/* eslint-disable react/no-unknown-property */
import React from "react";
import { Form } from "react-bootstrap";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="name" required />
      </Form.Group>
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
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Photo Url</Form.Label>
        <Form.Control
          type="text"
          name="photo"
          placeholder="your image"
          required
          // rows={3}
        />
      </Form.Group>
      <button variant="primary" type="submit">
        Register
      </button>
    </Form>
  );
};

export default Register;
