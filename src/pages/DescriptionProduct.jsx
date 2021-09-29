import React from "react";
import { useParams } from "react-router";
import { useQuery } from '../hooks/useQuery';
import '../pages/DescriptionProduct.scss';
import ItemCount from "../components/ItemCount/itemCount";
import { Link } from "react-router-dom";

const DescriptionProduct = () => {
    const [product, setProduct] = React.useState({});
    const { id } = useParams();
    let query = useQuery();
    const [loading, setLoading] = React.useState(false);
    const styles = {color: 'orange' , textDecoration: 'underline', textAlign: 'center'};

    React.useEffect(() => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((error) => console.log("Hubo un error inesperado"))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return <p>Cargando Sitio...</p>;
    } else {
        return (
            <div>
                <h1 style={styles}>Detalle Producto</h1>
                <p>Nombre del producto: {product?.title}</p>
                <p> Detalle: {product?.description}</p>
                <img src={product?.image} alt="producto" />
                <p>Color: {query.get("color")}</p>
                <p>Talle: {query.get("talle")}</p>
                <p>Precio: ${product?.price}</p>
                <p>Cantidad : <ItemCount /></p>
                <button>SM</button>
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
                <Link to={"/Cart"}>
                <button className="btn btn-danger">Finalizar Compra</button>
                </Link>
            </div>
        )
    }
}

export default DescriptionProduct;