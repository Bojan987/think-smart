import React, { useEffect } from "react";
import { listMeal, randomMeal } from "../../actions/mealsActions";
import { useDispatch, useSelector } from "react-redux";
import CardList from "../../components/CardList/CardList";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { Row, Col } from "react-bootstrap";

const MyMeals = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(randomMeal())
    dispatch(listMeal('Beef'))
  }, [dispatch]);

  const favoriteMeal = useSelector((state) => state.randomMeal);
  const likedMeals = useSelector((state) => state.mealList);
  const { loading, error, meals } = favoriteMeal;
  const {  meals:liked } = likedMeals;


  return (
    <main>
      {loading === false && meals.meals && liked.meals && meals.meals.length > 0 ? (
        <>
        
          <h4 className='py-4 d-flex justify-content-center'>My favorite meal</h4>
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
          <Row className='py-4 text-center justify-content-center'>
          <h4>Meals i also like: </h4>
          </Row>
          <Row>
            
            <CardList
                  dataList={liked.meals.sort(() => Math.random() - Math.random()).slice(0, 6)}
                  search=""
                  apiKeyword="Meal"
                  pagination={true}
                  itemsPerPage={3}
                  
                />
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
