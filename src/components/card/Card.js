import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

// const Click = () => {
//   alert("Se ha añadido un producto al carrito");
// };

const Card = ({ id, category, image, title, description, productId }) => {
  return (
    <div key={id} className="card ">
      <img src={image} className="img-product" alt={title} />
      <div className="card-body">
        <p>{title}</p>
        <p>{category}</p>
        <div>
          <p>Descripción: {description}</p>
        </div>
      </div>
      <Link to={`/product/${productId}`}>
        <button className="btn btn-danger">Ver Producto</button>
      </Link>
    </div>
  );
};

export default Card;
