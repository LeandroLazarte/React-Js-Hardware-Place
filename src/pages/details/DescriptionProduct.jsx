import React from "react";
import { ShoppingOutlined } from "@ant-design/icons";
import { useParams, useHistory } from "react-router";
import ItemCount from "../../components/ItemCount/itemCount";
import { UseCart } from "../../components/context/CartContext";
import { getFirestore } from "../../firebase/index";
import { Row, Col, message, Divider, Button, Image } from "antd";

const Description = () => {
    const [dataProduct, setDataProduct] = React.useState([]);
    const [oneProduct, setOneProduct] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [counter, setCounter] = React.useState(0);
    const {AddCart} = UseCart();
    const { id } = useParams();
    let story = useHistory();
    console.log(oneProduct);
    const styles = {listStyleType: 'none'}

    const addCount = () => {
        if (counter < oneProduct[0]?.stock) {
            const value = counter + 1;
            setCounter(value);
        } else {
            message.warning("Ha llegado al limite");
        }
    };

    const deleteCount = () => {
        if (counter > 0) {
            const value = counter - 1;
            setCounter(value);
        }
    };

    const handleAddData = () => {
        const takeData = { ...oneProduct[0], amount: counter };
        AddCart(takeData);
        message.success("Se ha agregado el producto", 3);
        story.push("/cart");
    };
   

    React.useEffect(() => {
        const getProduct = async () => {
            const dataBase = getFirestore();
            const productsColecction = dataBase
                .collection("Products")
                .orderBy("id", "asc");
            productsColecction
                .get()
                .then((querySnapshot) => {
                    if (querySnapshot.empty) {
                        console.log("No hay productos");
                    } else {
                        setDataProduct(
                            querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                        );
                    }
                })
                .catch((error) => console.log(error))
                .finally(() => setLoading(false));
        };
        getProduct();
    }, [id]);

    React.useEffect(() => {
        const takeProduct = () => {
            const product = dataProduct.filter(
                (product) => product.id === parseInt(id)
            );
            setOneProduct(product);
        };
        takeProduct();
    }, [dataProduct, id]);

    if (loading) {
        return (
            <Row justify="center">
                <Col span={24}>
                    <div style={{ height: "100", marginTop: 50 }}>
                        <p>Cargando Productos...</p>
                    </div>
                </Col>
            </Row>
        );
    }
    return (
        <Row justify="center">
            <Col span={24} lg={{ span: 12 }}>
                <div style={{ marginTop: 20 }}>
                    <Image
                        style={{ objectFit: "scale-down", alingItems: "center" }}
                        width={300}
                        height={300}
                        src={oneProduct[0]?.image}
                    />
                </div>
            </Col>
            <Col style={styles} span={24} lg={{ span: 12 }}>
                <div style={{ marginTop: 20 }}>
                    <h1>{oneProduct[0]?.title}</h1>
                    <Divider>
                        <h3>{oneProduct[0]?.description}</h3>
                    </Divider>
                    <Divider>
                        <h3>{`Precio: $${oneProduct[0]?.price}`}</h3>
                        <h3>{`Stock: ${oneProduct[0]?.stock}`}</h3>
                        <h3>{`Cantidad: ${counter}`}</h3>
                    </Divider>
                    <ItemCount addCount={addCount} deleteCount={deleteCount} />
                    <div style={{ marginTop: 50, alignItems: "center" }}>
                        {counter !== 0 && (
                            <Button
                                icon={<ShoppingOutlined />}
                                type="primary"
                                onClick={handleAddData}>
                                Agregar al carrito
                            </Button>
                        )}
                    </div>
                </div>
            </Col>
        </Row>
    )
}
export default Description;