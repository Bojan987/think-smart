import React from "react";
import { Col, Row, Button, Image } from "react-bootstrap";
const HomePageHeader = () => {
  return (
    <>
      <Row className="homePageHeader pt-4">
        <Col sm={12} md={6}>
          <div>
            <h3>
              <strong>Think</strong> and Cook <strong>Smart</strong>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              obcaecati non magni consectetur distinctio accusamus cupiditate.
              Minima illo quidem eos consectetur ad, ipsam ratione? Reiciendis
              minus consequuntur ducimus nemo corporis!
            </p>
          </div>

          <a href="#categories">
            <Button>Categories</Button>
          </a>
        </Col>
        <Col className="d-none d-md-block">
          <Image
            src="https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg/preview"
            alt="app image"
            className="appImage"
            rounded
          />
        </Col>
      </Row>
    </>
  );
};

export default HomePageHeader;
