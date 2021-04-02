import React, { useEffect } from "react";
import { randomMeal } from "../../actions/mealsActions";
import { useDispatch, useSelector } from "react-redux";
import CardList from "../../components/CardList/CardList";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { Row, Col } from "react-bootstrap";

const MyMeals = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(randomMeal());
  }, [dispatch]);

  const favoriteMeal = useSelector((state) => state.randomMeal);
  const { loading, error, meals } = favoriteMeal;

  return (
    <main>
      {loading === false && meals.meals && meals.meals.length > 0 ? (
        <>
          <CardList
            dataList={meals.meals}
            search=""
            apiKeyword="Meal"
            pagination={true}
            itemsPerPage={3}
          />
          <Row>
            <Col className="mealDetails">
              <h4>Country origin</h4>
              <p>{meals.meals[0].strArea} </p>
              <h4>Instructions</h4>
              <p>{meals.meals[0].strInstructions}</p>
            </Col>
          </Row>
        </>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default MyMeals;
