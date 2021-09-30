import React from "react";
import { useParams } from "react-router";
import { useQuery } from '../hooks/useQuery';
import '../pages/DescriptionProduct.scss';
import ItemCount from "../components/ItemCount/itemCount";
import { Link } from "react-router-dom";
import { useCart } from '../components/context/CartContext';

const DescriptionProduct = () => {
    const [product, setProduct] = React.useState({});
    const { id } = useParams();
    let query = useQuery();
    const [loading, setLoading] = React.useState(false);
    const { addItem } = useCart();
    const styles = { color: 'orange', textDecoration: 'underline', textAlign: 'center', display: 'flex', flexDirection: 'row' };

    React.useEffect(() => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((error) => console.log("Hubo un error inesperado"))
            .finally(() => setLoading(false));
    }, [id]);

    const addToCart = () => {
        addItem(product, ItemCount);
    }
    if (loading) {
        return <p>Cargando Sitio...</p>;
    } else {
        return (
            <div className="content">
                <h1 style={styles}>{product?.title}</h1>
                {/* <p>Nombre del producto: {product?.title}</p> */}
                <img className="image" src={product?.image} alt="producto" />
                <p className="description"> Detalle: {product?.description}</p>
                <p className="description">Color: {query.get("color")}</p>
                <p className="description">Talle: {query.get("talle")}</p>
                <p className="description">Precio: ${product?.price}</p>
                <p className="count">Cantidad: <ItemCount /></p>
                <div className="buttons">
                    <button className="btn">SM</button>
                    <button className="btn">S</button>
                    <button className="btn">M</button>
                    <button className="btn">L</button>
                    <button className="btn">XL</button>
                </div>
                <Link to={"/Cart"}>
                    <button onClick={addToCart} className="btn btn-danger">Agregar al carrito</button>
                </Link>
            </div>
        )
    }
}

export default DescriptionProduct;