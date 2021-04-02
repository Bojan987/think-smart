import React, { useEffect, useRef, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Overlay,
  Tooltip,
} from "react-bootstrap";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { logOut } from "../../actions/loginAction";
import Login from "./Login";
import Search from "./Search";

const Header = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const { location } = useHistory();
  const dispatch = useDispatch();
  const [isHome, setIsHome] = useState(null);
  const isLogedin = useSelector((state) => state.logedin);

  useEffect(() => {
    setIsHome(location.pathname);
  }, [location.pathname]);

  return (
    <header>
      <Navbar bg="primary" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Think and Cook Smart</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Search />
            <Nav className="ml-auto">
              {!isLogedin.logedin ? (
                <>
                  <Nav.Link ref={target} onClick={() => setShow(!show)}>
                    <i className="far fa-user  mr-3 "></i>Login
                  </Nav.Link>
                  <Overlay
                    target={target.current}
                    show={show}
                    placement="bottom"
                  >
                    {(props) => (
                      <Tooltip {...props}>
                        <Login setShow={setShow} />
                      </Tooltip>
                    )}
                  </Overlay>
                </>
              ) : (
                <Nav.Link ref={target} onClick={() => dispatch(logOut())}>
                  <i className="far fa-user  mr-3 "></i>Logout
                </Nav.Link>
              )}

              {isHome !== "/" && (
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
              )}
              <LinkContainer to="/#about">
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/#contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
              {isLogedin.logedin && (
                <LinkContainer to="/mymeals">
                  <Nav.Link>My Meals</Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
