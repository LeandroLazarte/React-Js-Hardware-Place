import React, { Component } from 'react';
import  {Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import "./styles/NavBar.css";
import logo from './Logo.png';

export default class NavBar extends Component{
    render(){
        return( <Navbar className="NavBar" bg="dark" variant={"dark"} expand="xl">
        
        <Navbar.Brand href="#"><img src={logo} className="logo" alt="Logo Empresarial"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="link" href="#action1">Inicio</Nav.Link>
            <Nav.Link className="link" href="#action2">Productos</Nav.Link>
            <Nav.Link className="link" href="#action3">Nosotros</Nav.Link>
            <Nav.Link className="link" href="#action4">Contacto</Nav.Link>
            <Nav.Link className="link" href="#action5">Registro</Nav.Link>
          </Nav>
          <Form className="d-flex" >
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="btn btn-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>)
    }

}

