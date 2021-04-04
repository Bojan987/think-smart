import React from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";

const PaginatedCard = ({ apiKeyword, el, link,size }) => {
  return (
    <Col xs={11} md={size ? size : 3}>
      <Link
        to={
          link ? link : `/${apiKeyword.toLowerCase()}/${el[`id` + apiKeyword]}`
        }
        className="link"
      >
        <Card className="my-3 card">
          <Card.Img variant="top" src={el[`str${apiKeyword}Thumb`]} />
          <Card.Body>
            {el["str" + apiKeyword + "Description"] ? (
              <Card.Title>{el["str" + apiKeyword]}</Card.Title>
            ) : (
              <Card.Text
                style={{ height: "6rem" }}
                className="cardText justify-content-center d-flex align-items-center "
              >
                {el["str" + apiKeyword]}
              </Card.Text>
            )}
            {el["str" + apiKeyword + "Description"] && (
              <Card.Text style={{ height: "10rem" }} className="cardText">
                {el["str" + apiKeyword + "Description"]}
              </Card.Text>
            )}
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default PaginatedCard;
