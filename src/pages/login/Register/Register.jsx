/* eslint-disable react/no-unknown-property */
import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  // console.log(createUser);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photo.value;
    console.log(name, email, password, photoUrl);

    createUser(email, password)
      .then((result) => {
        const registered = result.user;
        console.log(registered);
      })
      .catch((error) => {
        console.log(error);
      });
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
        <Form.Label>password</Form.Label>
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
