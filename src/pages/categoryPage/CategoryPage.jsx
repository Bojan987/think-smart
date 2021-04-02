import React, { useEffect, useState } from "react";
import { Row, FormControl, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { listMeal } from "../../actions/mealsActions";
import CardList from "../../components/CardList/CardList";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

import _ from "lodash";

const CategoryPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const mealList = useSelector((state) => state.mealList);

  const { loading, error, meals } = mealList;
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(listMeal(id));
  }, [dispatch, id]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };



  return (
    <>
      <header>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <FormControl type="text" onChange={handleSearch} />
          </Col>
        </Row>
      </header>
      <section id="recomended" className=" py-4">
        <h4 className="text-center">Our Recomendation</h4>
        <Row className="py-4 recomendedImg">
          <Col md={4}>
            {loading === false && meals.meals && meals.meals.length > 0 ? (
              <>
                <CardList
                  dataList={[meals.meals[2]]}
                  search=""
                  apiKeyword="Meal"
                  pagination={true}
                  itemsPerPage={2}
                />
              </>
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              <Loader />
            )}
          </Col>

          <Col md={6}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              accusantium amet repellendus quo saepe accusamus minus et odio,
              inventore optio?
            </p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
            nesciunt.
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              blanditiis assumenda cupiditate, inventore accusamus fugiat. Eos,
              recusandae itaque. Veritatis totam earum doloremque, cupiditate
              autem omnis blanditiis reprehenderit. Maiores, dolore itaque.
              Reprehenderit ullam totam ea odio minus aliquam at suscipit eum!
            </p>
          </Col>
        </Row>

        {/* {recomended && (
          <Row className="py-4 recomendedImg">
            <Col md={4}>
              <Link to={`/meal/2`} className="link" key={recomended.idMeal}>
                <Card style={{ width: "16rem" }} className="m-2 card">
                  <Card.Img variant="top" src={recomended.strMealThumb} />
                  <Card.Body>
                    <Card.Text style={{ height: "6rem" }} className="cardText">
                      {recomended.strMeal}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
              
            </Col>
            <Col md={6}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita accusantium amet repellendus quo saepe accusamus minus
                et odio, inventore optio?
              </p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
              nesciunt.
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
                blanditiis assumenda cupiditate, inventore accusamus fugiat.
                Eos, recusandae itaque. Veritatis totam earum doloremque,
                cupiditate autem omnis blanditiis reprehenderit. Maiores, dolore
                itaque. Reprehenderit ullam totam ea odio minus aliquam at
                suscipit eum!
              </p>
            </Col>
          </Row>
        )} */}
      </section>
      <main className="py-4 " id="meals">
        <h4 className="text-center py-4"> Pick one of our delicious Meals</h4>
        {loading === false && meals.meals && meals.meals.length > 0 ? (
          <>
            <CardList
              dataList={meals.meals}
              pagination={true}
              search={search}
              itemsPerPage={8}
              apiKeyword="Meal"
            />
          </>
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Loader />
        )}
      </main>
    </>
  );
};

export default CategoryPage;
