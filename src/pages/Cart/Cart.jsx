import React from 'react';
import { UseCart } from '../../components/context/CartContext';
import { useHistory } from 'react-router';
import { Row, Card, Col, Image, Button, Popconfirm, message, notification, Modal } from 'antd';
import { SmileTwoTone } from '@ant-design/icons'

import './cart.scss';

const { Meta } = Card;

const Cart = () => {
    const { cart, removeItemArr, CalculatePrice, deleteCart } = UseCart();
    const [visible, setVisible] = React.useState(false);
    const styles = { listStyleType: 'none' };
    const marginTop = { marginTop: '600px' }

    let story = useHistory();

    const deleteProduct = (id) => {
        removeItemArr(id);
    }

    console.log(cart);
    React.useEffect(() => {
        if (cart.length === 0) {
            story.push("/cart");
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
                Borrar Productos
            </Button>
        );
        notification.open({
            message: "¿Esta seguro que desea borrar el/los productos?",
            description:
                "Si usted confirma, se eliminaran todos los productos del carrito",
            btn,
            key,
            onClose: sendMessage,
        });
    };

    return (
        <Row style={styles} gutter={[16, 16]} >
            <Col span={24} lg={{ span: 12 }}>
                <Row justify="end">
                    <Button type="danger" onClick={openNotification}>
                        Borrar todo el carrito
                    </Button>
                </Row>
                <div style={{ marginTop: 20 }}>
                    <h1 style={marginTop}>{`Total a pagar: $${CalculatePrice()}`}</h1>
                </div>
            </Col>
            <Row>
                <>
                    <Row>
                        <Button style={{ marginTop: 8 }} type="primary" onClick={() => setVisible(true)}>
                            Finalizar Compra
                        </Button>
                    </Row>
                    <Modal
                        title="Compra finalizada"
                        centered
                        visible={visible}
                        onOk={() => setVisible(false)}
                        onCancel={() => setVisible(false)}
                        width={1000}
                    >
                        {cart.map((product) => (
                            <>
                            <h1>¡Felicidades! Su compra se realizo con éxito</h1>
                                <Meta title={product.title} />
                                <img src={product.image} alt="" />
                                <p>{`Precio: $${product.price}`}</p>
                                <p>{`Cantidad: ${product.amount}`}</p>
                                <p>{`Total: $${(product.amount * product.price)}`}</p>
                                <h2>Se le enviara un correo a su E-mail con los detalles de la compra</h2>
                                <h3>Gracias por confiar en nosotros <SmileTwoTone /></h3> 
                            </>
                        ))}
                    </Modal>
                </>
            </Row>
            {cart.map((product) => (
                <div key={product.id} style={{ marginTop: 30 }}>
                    <Col>
                        <Card
                            style={{ width: 300 }}
                            cover={
                                <Image
                                    style={{ objectFit: "cover", alingItems: "center" }}
                                    width={250}
                                    height={250}
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
                            ]}>
                            <Meta title={product.title} />
                            <p>{`Precio: $${product.price}`}</p>
                            <p>{`Cantidad: ${product.amount}`}</p>
                            <p>{`Total: $${(product.amount * product.price)}`}</p>
                        </Card>
                    </Col>
                </div>
            ))}
        </Row>


    )
}
export default Cart;