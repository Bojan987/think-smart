import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { mealDetails } from "../../actions/mealsActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import CardList from "../../components/CardList/CardList";
import { Row, Col } from "react-bootstrap";
const SingleMealPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(mealDetails(id));
  }, [dispatch, id]);
  const similarMeals = useSelector(state=>state.mealList)
  const mealInfo = useSelector((state) => state.mealDetails);
  const { loading, error, meals } = mealInfo;

  useEffect(() => {
    
   
  }, [similarMeals])

  return (
    <>
      {loading === false && meals.meals ? (
          <>
        <Row className='align-items-center'>
          <Col md={6} className='singleCardImg'>
            <CardList
              dataList={meals.meals}
              pagination={false}
              apiKeyword="Meal"
              search=""
              link={`/category/${meals.meals[0].strCategory}`}
            />
          </Col>
          <Col className='mealDetails'>
          <h4>Country origin</h4>
            <p>{meals.meals[0].strArea} </p>
            <h4>Instructions</h4>
            <p>{meals.meals[0].strInstructions}</p>
          </Col>
        </Row>
        <Row>
        {/* <CardList
                  dataList={}
                  search=""
                  apiKeyword="Meal"
                  pagination={true}
                  itemsPerPage={4}
                /> */}
        </Row>
        </>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default SingleMealPage;
