import React from "react";
import ItemCount from "../ItemCount/itemCount";
import "./Card.scss";
import { Link } from "react-router-dom";

const Click = () => {
  alert("Se ha añadido un producto al carrito");
};

const Card = ({ id, image, title, description, price, productId}) => {
  return (
    <div key={id} className="card-item">
      <Link to={`/product/${productId}`}>
        <img src={image} className="img-product" alt={title} />
      </Link>
      <div className="card-body">
        <p>{title}</p>
        <p>Descripción</p>
        <p>{description}</p>
        <p>{price}</p>
        <p>Cantidad</p>
        <p className="count">
          <ItemCount />
        </p>
      </div>
      <button onClick={Click} className="btn btn-danger">
        Añadir al carrito
      </button>
    </div>
  );
};

export default Card;
