import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
import { CardGroup, Card } from "react-bootstrap";

const Cards = ({ id, category, image, title, description, productId }) => {
  return (
    <CardGroup >
      <Card style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'space-between'}} key={id}>
        <Card.Img
          style={{ width: "250px", height: "250px" }}
          variant="top"
          src={image}
          alt={title}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <Link to={`/product/${productId}`}>
            <button id="button" className="btn btn-danger">
              Ver Producto
            </button>
          </Link>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default Cards;
