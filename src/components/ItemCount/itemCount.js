import React from 'react';
import './item-count.scss'

const ItemCount = () =>{
    const [counter, setCounter] = React.useState(1)
    const handleClick = () =>{
        setCounter(counter + 1);
    };
    const handleClick1 = () =>{
        setCounter(counter - 1);
    };
    
    return(
    <div className="item-count">
    <p className="count"> <button className="button" onClick={handleClick1}>-</button> {counter} <button className="button" onClick={handleClick}>+</button></p>
    </div>
    );
};

export default ItemCount;