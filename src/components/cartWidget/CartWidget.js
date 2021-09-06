import React from 'react';
import './CartWidget.scss';
import { Dropdown,Table} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const CartWidget = () =>{
return(
    <Dropdown>
    <Dropdown.Toggle variant="danger" id="dropdown-basic">
   Mi Carrito <FontAwesomeIcon icon={faShoppingCart}/> 
    </Dropdown.Toggle>
    <Dropdown.Menu>
    <Table id="table" striped bordered hover size="xl">
  <thead>
    <tr>
      <th>#</th>
      <th>Producto</th>
      <th>Cantidad</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>2</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>3</td>
      <td ></td>
      <td></td>
    </tr>
  </tbody>
</Table>
    </Dropdown.Menu>
  </Dropdown>
)
}


export default CartWidget


        