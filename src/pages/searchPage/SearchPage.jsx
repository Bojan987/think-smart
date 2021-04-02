import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Row, Col, Form } from "react-bootstrap";
import CardList from "../../components/CardList/CardList";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

const SearchPage = () => {
  const searchDetails = useSelector((state) => state.searchResult);
  const randomMeal = useSelector(state=>state.randomMeal)
  const { loading, error, meals } = searchDetails;
  const {  meals:meal } = randomMeal
  const [categories, setCategories] = useState([]);
  const [select, setSelect] = useState("");

  useEffect(() => {
    if (!loading && meals &&meals.meals&& meals.meals.length > 0) {
      const temp = meals.meals.map((el) => el.strCategory);
      const unique = new Set(temp);
      setCategories([...unique]);
    }
  }, [loading, meals.meals]);

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  return (
    <>
      <Row className="py-4 justify-content-center">
        <h3>Search Results</h3>
      </Row>
      <section className="py-4 ">
          
                <h4 className='py-4 text-center'>We recommend</h4>
      {loading === false && meal.meals && meal.meals.length > 0 ? (
          <CardList
            dataList={meal.meals}
            search=''
            apiKeyword="Meal"
            pagination={true}
            itemsPerPage={3}
          />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Loader/>
        )}
         
       
      </section>
      {loading === false &&categories&&<Row className="py-4">
        <Col md={{ span: 2, offset: 10 }}>
          <Form onChange={handleSelect}>
            <Form.Label>Select Category</Form.Label>
            <Form.Control as="select" size="sm">
              <option value="">All</option>
              {loading === false &&
                categories &&
                categories.length > 0 &&
                categories.map((el) => (
                  <option value={el} key={el}>
                    {el}
                  </option>
                ))}
            </Form.Control>
          </Form>
        </Col>
      </Row>}
      <main>
        {loading === false && meals.meals && meals.meals.length > 0 ? (
          <CardList
            dataList={meals.meals}
            search={select.toLowerCase()}
            apiKeyword="Meal"
            pagination={true}
            itemsPerPage={8}
          />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <h3>Sorry i could not find any result for this search</h3>
        )}
      </main>
    </>
  );
};

export default SearchPage;
