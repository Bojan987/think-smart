import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const LinkedCard = ({ el, apiKeyword, link }) => {
  return (
    <Link
      to={
        link ? link : `/${apiKeyword.toLowerCase()}/${el["str" + apiKeyword]}`
      }
      className="link"
      key={el["id" + apiKeyword]}
    >
      <Card  className="my-3 card">
        <Card.Img variant="top" src={el["str" + apiKeyword + "Thumb"]} />
        <Card.Body>
          <Card.Title>{el["str" + apiKeyword]}</Card.Title>
          {el["str" + apiKeyword + "Description"] ? (
            <Card.Text style={{ height: "10rem" }} className="cardText">
              {el.strCategoryDescription}
            </Card.Text>
          ) : (
            <Card.Text style={{ height: "10rem" }} className="cardText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              fugiat quod sed eaque enim vero error, suscipit provident cum
              debitis! Quas incidunt nam ducimus rerum dolor sit sed fuga error?
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </Link>
  );
};

export default LinkedCard;
