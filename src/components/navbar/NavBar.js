import React from "react";
import { Navbar, Nav, Badge } from "react-bootstrap";
import "./NavBar.scss";
import logo from "./Logo.png";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const {cart } = useCart();
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
          style={{ maxHeight: "300px" }}
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
          <Link to="/cart">
            <Nav.Link className="link" href="#action6">
            <Badge bg="secondary">{cart ? cart :0}</Badge>
            <FontAwesomeIcon icon={faShoppingCart}/>
            Carrito
            </Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
