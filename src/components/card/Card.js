import React from 'react';
import './Card.scss'

const Card = ({src, title, description, price}) =>{
    return(
        <div className="card-item">
            <img src={src} alt="Imagen Card"/>
            <div className="card-body">
            <p>{title}</p>
            <p>{description}</p>
            <p>{price}</p>
            </div>
            <button className="btn btn-danger">Comprar</button>
        </div>
    );  
};

export default Card



