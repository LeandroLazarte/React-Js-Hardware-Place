import React from 'react';
import ItemCount from '../ItemCount/itemCount';
import './Card.scss'

const Click = () => {
    alert("Se ha añadido su/s producto al carrito");
}

const Card = ({id,img, title, description, price,stock}) =>{
    return(
        <div key={id} className="card-item">
            <img src={img} className="img-product" alt="Imagen Card"/>
            <div className="card-body">
            <p>{title}</p>
            <p>{description}</p>
            <p>{price}</p>
            <p>Cantidad</p>
            <p>{stock}</p>
            <ItemCount/>
            </div>
            <button onClick={Click} className="btn btn-danger">Añadir al carrito</button>
        </div>
    );  
};

export default Card



