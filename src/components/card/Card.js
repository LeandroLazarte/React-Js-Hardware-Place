import React from "react";

import "./Card.scss";
import { Link } from "react-router-dom";

// const Click = () => {
//   alert("Se ha añadido un producto al carrito");
// };

const Card = ({ id, image, title, description, price, productId }) => {
  return (
    <div key={id} className="card-item">
      <img src={image} className="img-product" alt={title} />
      <div className="card-body">
        <p>{title}</p>
        <p>Descripción</p>
        <p>{description}</p>
      </div>
      <Link to={`/product/${productId}`}>
        <button className="btn btn-danger">Ver Producto</button>
      </Link>
    </div>
  );
};

export default Card;
