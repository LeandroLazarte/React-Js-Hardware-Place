import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavBar.scss";
import logo from "./Logo.png";
import CartWidget from "../cartWidget/CartWidget";
import { Link } from "react-router-dom";

const Header = () => {
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  // const handelClick = () => {
  //   if (isLoggedIn === true) {
  //     setIsLoggedIn(false);
  //   } else {
  //     setIsLoggedIn(true);
  //   }
  // };
  return (
    <Navbar className="NavBar" bg="dark" variant={"dark"} expand="xxl">
      <Link to="/">
        <Navbar.Brand href="#">
          <img src={logo} className="logo" alt="Logo Empresarial" />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Link to="/">
            <Nav.Link className="link" href="#action1">
              Inicio
            </Nav.Link>
          </Link>
          <Link to="/nosotros">
            <Nav.Link className="link" href="#action3">
              Nosotros
            </Nav.Link>
          </Link>
          <Link to="/contacto">
            <Nav.Link className="link" href="#action4">
              Contacto
            </Nav.Link>
          </Link>
          <Link to="/registro">
            <Nav.Link className="link" href="#action5">
              Registro
            </Nav.Link>
          </Link>
          {/* {isLoggedIn.toString()}
          <button onClick={handelClick}>Cambiar estado</button> */}
        </Nav>
      </Navbar.Collapse>
      <CartWidget />
    </Navbar>
  );
};

export default Header;
