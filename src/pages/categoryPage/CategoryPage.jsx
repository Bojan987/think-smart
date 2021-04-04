import React, { useEffect, useState, useRef } from "react";
import { Row, FormControl, Col } from "react-bootstrap";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { listMeal } from "../../actions/mealsActions";
import CardList from "../../components/CardList/CardList";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

const CategoryPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const mealList = useSelector((state) => state.mealList);
  const [recomendation, setRecomendation] = useState([]);
  const { loading, error, meals } = mealList;
  const [search, setSearch] = useState("");

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      setRecomendation([
        meals.meals[Math.floor(Math.random() * meals.meals.length)],
      ]);
    }
  }, [meals.meals]);

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
                  dataList={recomendation}
                  search=""
                  apiKeyword="Meal"
                  pagination={true}
                  itemsPerPage={2}
                  size={10}
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
