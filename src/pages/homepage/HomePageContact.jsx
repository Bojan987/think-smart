import React, { useState } from "react";
import { Col, Row, Button, Form } from "react-bootstrap";


const HomePageContact = () => {
  
  const [classes, setClasses] = useState("");
  const [message, setmessage] = useState({
    firstName: "",
    lastName: "",
    email: "",
    text: "",
  });

  const handlesValidation = () => {
    setTimeout(() => {
      setClasses("");
    }, 2000);

    if (
      message.firstName.trim() !== "" &&
      message.lastName.trim() !== "" &&
      message.email.trim() !== "" &&
      message.text.trim() !== ""
    )
      return true;
  };

  const handleMessage = (e) => {
    const { name, value } = e.target;
    setmessage((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (handlesValidation()) {
      localStorage.setItem("message", JSON.stringify(message));
      setClasses("show showAlert");
    }
  };
  return (
    <Row>
      <Col sm={12} md={{ span: 4, offset: 3 }}>
        <h2 className="text-center">Contact</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              onChange={handleMessage}
              value={message.firstName}
              name="firstName"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your Last Name"
              onChange={handleMessage}
              value={message.lastName}
              name="lastName"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleMessage}
              value={message.email}
              name="email"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Your Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={handleMessage}
              value={message.text}
              name="text"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
      <Col className="alertWrapper">
        <div className={`alert ${classes}`}>
          <span className="fas fa-exclamation-circle"></span>
          <span className="msg">Success!</span>
        </div>
      </Col>
    </Row>
  );
};

export default HomePageContact;
