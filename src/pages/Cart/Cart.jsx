import React from 'react';
import { useCart } from '../../components/context/CartContext';
import { useHistory } from 'react-router';
import { Row, Card, Col, Image, Button, Popconfirm, message, notification } from 'antd';

import './cart.scss';

const { Meta } = Card;

const Cart = () => {
    const { cart, removeItemArr, CalculatePrice, deleteCart } = useCart();

    let story = useHistory();

    const deleteProduct = (id) => {
        removeItemArr(id);
    }

    React.useEffect(() => {
        if (cart.length === 0) {
            story.push("/");
        }
    }, [cart, story]);

    const deleteAllProduct = (key) => {
        deleteCart();
        notification.close(key);
    }

    const sendMessage = () => {
        message.info("No se borraran sus productos")
    };

    const openNotification = () => {
        const key = "Open";
        const btn = (
            <Button
                danger
                type="danger"
                size="small"
                onClick={() => deleteAllProduct(key)}
            >
            Confirmar Compra
            </Button>
        );
        notification.open({
            message:"¿Esta seguro que desea borrar el/los productos?",
            description:
            "Si usted confirma, se eliminaran todos los productos del carrito",
            btn,
            key,
            onClose: sendMessage,
        });
    };
    
    return(
        <Row gutter={[16, 16]}>
            <Col span={24} lg={{ span: 12 }}>
                <Row justify="end">
                <Button>
                onClick={openNotification}
                Borrar todo el carrito
                </Button>
                </Row>
                <div style={{marginTop: 20}}>
                    <h1>{`Total a pagar: $${CalculatePrice().toFixed(2)}`}</h1>
                </div>
            </Col>
            {cart.map((product) =>(
                <div key={product.id} style={{marginTop: 30}}>
                    <Col>
                        <Card>
                            style={{width:300 }}
                            cover={
                                <Image
                                style={{objectFit:"cover", alingItems:"center"}}
                                width={300}
                                height={300}
                                src={product.image}
                                />
                            }
                            actions={[
                                <>
                                <Popconfirm
                                title="¿Esta seguro que desea eliminar este producto?"
                                onConfirm={() => deleteProduct(product.id)}
                                okText="SI"
                                cancelText="NO" 
                                >
                                </Popconfirm>
                                </>,
                            ]}
                            <Meta title={product.title}/>
                            <p>{`Precio: $${product.price}`}</p>
                            <p>{`Cantidad: $${product.amount}`}</p>
                            <p>{`Total: $${(product.amount * product.price).toFixed(2)}`}</p>
                        </Card>
                    </Col>
                </div>
            ))}
        </Row>
    )
}
export default Cart;