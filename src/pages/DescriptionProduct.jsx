import React from "react";
import { useParams } from "react-router";
import { useQuery } from '../hooks/useQuery'
import '../pages/DescriptionProduct.scss'

const DescriptionProduct = () => {
    const [product, setProduct] = React.useState({});
    const { id } = useParams();
    let query = useQuery();
    const [loading, setLoading] = React.useState(false);

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
                <h1>Detalle Producto</h1>
                <p>{product?.title}</p>
                <p>{product?.description}</p>
                <img src={product?.image} alt="producto" />
                <p>Color: {query.get("color")}</p>
                <p>Talle: {query.get("talle")}</p>
                <button>SM</button>
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
            </div>
        )
    }
}

export default DescriptionProduct;