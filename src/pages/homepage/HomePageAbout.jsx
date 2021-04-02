import React from "react";
import { Col, Row, Image } from "react-bootstrap";
const HomePageAbout = () => {
  return (
    <div>
      <Row>
        <Col sm={12} md={6}>
          <h2>About Us</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos inventore voluptas ullam? Reiciendis dignissimos neque
            libero ea fuga eos magni repellendus error, eaque eveniet sed rerum
            suscipit pariatur, ex modi.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            laborum ipsa esse ducimus, error in maiores molestiae nostrum
            repellat officiis earum repellendus nulla quam harum dignissimos
            excepturi odio nihil quaerat?
          </p>
        </Col>
        <Col>
          <Image
            src="https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg"
            alt="AppLogo"
            className="d-none d-md-block appImage"
          />
        </Col>
      </Row>
    </div>
  );
};

export default HomePageAbout;
