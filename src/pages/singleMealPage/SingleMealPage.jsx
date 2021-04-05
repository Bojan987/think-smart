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
  const similarMeals = useSelector((state) => state.mealList);
  const mealInfo = useSelector((state) => state.mealDetails);
  const { loading, error, meals } = mealInfo;
  const { meals: similar, loading: loadingSimilarMeals } = similarMeals;

  const mealIngredients = (meal) => {
    let ingrediantKey = Object.keys(meal).filter((el) =>
      el.includes("strIngredient")
    );
    
    let ingrediantMesure = Object.keys(meal).filter((el) =>
      el.includes("strMeasure")
    );
    console.log(meal);
    
    return (
      <div>
        <h4 className="py-3">Ingrediants:</h4>
        {ingrediantKey.map((el, idx) => {
          return (
            <div>
              
        {meal[ingrediantKey[idx]] !== "" && (
          <p key={idx}>
            {meal[ingrediantKey[idx]]} : {meal[ingrediantMesure[idx]]}{" "}
          </p>
        )}
            </div>);
        })}
      </div>
    );
  };

  return (
    <>
      {loading === false && loadingSimilarMeals === false && meals.meals ? (
        <>
          
          <Row>
            <Col md={6} className="singleCardImg">
              <CardList
                dataList={meals.meals}
                pagination={false}
                apiKeyword="Meal"
                search=""
                link={`/category/${meals.meals[0].strCategory}`}
                size={7}
              />
            </Col>
            <Col className="mealDetails">
              <h4>Country origin</h4>
              <p>{meals.meals[0].strArea} </p>
              <h4>Instructions</h4>
              <p>{meals.meals[0].strInstructions}</p>
              {mealIngredients(meals.meals[0])}
            </Col>
          </Row>
          <Row className="py-4 text-center justify-content-center">
            <h4>Similar meals </h4>
          </Row>
          <Row>
            <CardList
              dataList={similar.meals
                .sort(() => Math.random() - Math.random())
                .slice(0, 3)}
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
    </>
  );
};

export default SingleMealPage;
