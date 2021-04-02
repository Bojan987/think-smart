import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <Container>
        <Row className=" footer">
          <Col className=" py-3  text-center" md={4} sm={6} xs={4}>
            <i className="fas fa-utensils fa-2x mr-8"></i>
          </Col>
          <Col
            className="text-center py-3 "
            xs={{ order: 3 }}
            md={{ order: 2 }}
          >
            Copyright &copy; Bojan Majmunovic
          </Col>
          <Col className="socials py-3" sm={6} xs={8} md={{ order: 3 }}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="link"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://www.github.com/" target="_blank" className="link">
              <i className="fab fa-github  ml-3 fa-2x"></i>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="link"
            >
              <i className="fab fa-linkedin-in  ml-3 fa-2x"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
