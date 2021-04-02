import React, { useRef } from "react";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { listCategory } from "../../actions/categoryActions";
import CardList from "../../components/CardList/CardList";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import HomePageAbout from "./HomePageAbout";
import HomePageContact from "./HomePageContact";
import HomePageHeader from "./HomePageHeader";

const HomePage = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categories } = categoryList;
  const about = useRef();
  const contact = useRef()
  const history=useHistory()
  let {
    location: { hash },
  } = useHistory();

  useEffect(() => {
    dispatch(listCategory());
  }, [dispatch]);

  useEffect(() => {
    if (hash === "#about") {
      const timer = setTimeout(() => {
        about.current.scrollIntoView({
          behavior: "smooth",
          alignToTop: true,
        });

        // history.push('/')
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }

    if (hash === "#contact") {
      const timer = setTimeout(() => {
        about.current.scrollIntoView({
          behavior: "smooth",
          alignToTop: true,
        });

        // history.push('/')
      }, 300);

      return () => {
        clearTimeout(timer);
      };
    }

  }, [hash,history]);
  return (
    <>
      <header>
        <HomePageHeader />
      </header>
      <main className="py-4 " id="categories">
        <h3 className="text-center"> Pick one of our Categories</h3>
        {loading === false ? (
          <Row>
            <CardList dataList={categories.categories} pagination={false} apiKeyword='Category' search=''/>
          </Row>
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Loader />
        )}
      </main>
      <section id="about" className="py-4" ref={about}>
        <HomePageAbout />
      </section>
      <section id="contact" className="py-4" ref = {contact}>
        <HomePageContact />
      </section>
    </>
  );
};

export default HomePage;
