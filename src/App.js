import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Container } from "react-bootstrap";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import HomePage from "./pages/homepage/HomePage";
import SingleMealPage from "./pages/singleMealPage/SingleMealPage";
import SearchPage from "./pages/searchPage/SearchPage";
import MyMeals from "./pages/myMealspage/MyMeals";
import ScrollToTop from "./components/ScrollToTop";
import { useSelector } from "react-redux";


function App() {
  const isLogedIn = useSelector((state) => state.logedin);
  

  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          
            
            <Route path="/" component={HomePage} exact />
            <ScrollToTop />
            <Route path="/category/:id" component={CategoryPage} exact />

            <Route path="/meal/:id" component={SingleMealPage} exact />

            <Route path="/search" component={SearchPage} exact />

            {isLogedIn.logedin ===false ? (
              <Redirect to ='/'/>
            ) : (
              <Route path="/mymeals" component={MyMeals} exact />
            )}
          
          
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
