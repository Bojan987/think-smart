import React, { useState, useRef, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../../actions/loginAction";

const Login = ({ setShow }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const registeredUser = { email: "test@test.com", password: "test" };
  const [classes, setClasses] = useState("");
  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setShow(false);
    }
  };

  const handleClickInside = () => setShow(true);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

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
    } else {
      setClasses("show showAlert");
      setTimeout(() => {
        setClasses("");
      }, 1500);
    }
  };

  return (
    <>
      <Form onSubmit={handleOnSubmit} ref={myRef} onClick={handleClickInside}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
            value={user.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="has-warning">
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
      <div className="alertWrapper">
        <div className={`alertWarning ${classes}`}>
          <span className="fas fa-exclamation-circle"></span>
          <span className="msg">Fail!</span>
        </div>
      </div>
    </>
  );
};

export default Login;
