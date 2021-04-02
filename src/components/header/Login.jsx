import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {  login } from "../../actions/loginAction";

const Login = ({ setShow }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const registeredUser = { email: "test@test.com", password: "test" };
  

  const dispatch = useDispatch();
  const handlesValidation = () => {
    if (
      user.email.trim() !== "" &&
      user.password.trim() !== "" &&
      user.email === registeredUser.email &&
      user.password === registeredUser.password
    )
      return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (handlesValidation()) {
      dispatch(login());
      setShow(false);
    }
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          required
          value={user.email}
          onChange={handleChange}
          variant="warning"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          required
          value={user.password}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Login;
