import React from "react";
import { useParams } from "react-router";
import "./DescriptionProduct.scss";
import ItemCount from "../../components/ItemCount/itemCount";
import { Link } from "react-router-dom";
import { useCart } from '../../components/context/CartContext';
import { getFirestore } from "../../firebase/index";
import { Col, Row, message } from 'antd';


function DescriptionProduct() {
    const [product, setProduct] = React.useState([]);
    const { id } = useParams();
    const [loading, setLoading] = React.useState(false);
    const { addItem } = useCart();
    const [counter, setCounter] = React.useState(1);
    const styles = { color: 'orange', textDecoration: 'underline', textAlign: 'center', display: 'flex', flexDirection: 'row' };

    React.useEffect(() => {
        const getProduct = async () => {
            try {
                setLoading(true);
                //Apunta a la base de datos
                const dataBase = getFirestore();
                //Apunta a la coleccion de base de datos
                const productCollection = dataBase.collection("Products");
                //Apunta a un elemento
                const filterProduct = productCollection.filter(
                    (product) => product.id === parseInt(id)
                );
                setProduct(filterProduct);
            } catch (error) {
                message.error("Consulta Incorrecta");
            } finally {
                setLoading(false);
            }
        };
        getProduct();
    }, [id]);





    const addToCart = () => {
        const test = { ...product, Cantidad: counter }
        addItem(test)
    }

    if (loading) {
        return <div>Cargando Sitio...</div>;
    } else {
        return (<Row>
            <Col>
                <div className="content" style={{ display: 'flex', flexDirection: 'column' }}>
                    <h1 style={styles}>{product?.title}</h1>
                    <img className="image" src={product?.image} alt="producto" />
                    <p className="description"> Detalle: {product?.description}</p>
                    <p className="description"> Precio: {product?.price}</p>
                    <p className="count">Cantidad: <ItemCount counter={counter} setCounter={setCounter} /></p>
                    <Link to={"/Cart"}>
                        <button onClick={addToCart} className="btn btn-danger">Agregar al carrito</button>
                    </Link>
                </div>
            </Col>
        </Row>
        );
    }
}
export default DescriptionProduct;



