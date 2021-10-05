import React from 'react';
import './item-count.scss';

const ItemCount = ({counter,setCounter}) =>{
    const handleClick = () =>{
        setCounter(counter + 1);
    };
    const handleClick1 = () =>{
        setCounter(counter - 1);
    };
    
    return(
    <div className="item-count">
    <button className="button" onClick={handleClick1}>-</button>
    {counter}
    <button className="button" onClick={handleClick}>+</button>
    </div>
    );
};

export default ItemCount;