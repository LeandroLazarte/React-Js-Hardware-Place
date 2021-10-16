import React, { useEffect } from 'react';
import { useCart } from '../../components/context/CartContext';
import { useHistory } from 'react-router';
import { Row, Card } from 'react-bootstrap';
import './cart.scss';

const Carrito = () => {
    const { cart, finallyPrice } = useCart();
    let history = useHistory();

    // const handleDelete = (id) => {
    //     removeItem(id);
    // }

    useEffect(() => {
        if (cart.length === 0) {
            history.push("/");
        }
    }, [cart, history]);

    // const handleClear = (key) => {
    //     clear();
    // }
    return (
        <Row>
            {cart.map((product) => (
                <Card width={300} height={300}>
                    <div key={product?.id} className="content">
                        <h1>{product?.title}</h1>
                        <img style={{ width: '300px', height: '300px' }} className="image" src={product?.image} alt="producto" />
                        <p style={{ fontSize: '20px' }} className="description"> Detalle: {product?.description}</p>
                        <p className="description">Precio: $ {product?.price}</p>
                        <p className="description">Cantidad:{product?.cantidad}</p>
                    </div>
                </Card>
            ))
            }
            <div style={{ marginBottom:40}}>
            <h1>{`Total de la compra: $${finallyPrice().toFixed(2)}`}</h1>
            </div>
        </Row>


    )
}

export default Carrito;