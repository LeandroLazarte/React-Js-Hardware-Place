import React from "react";
import { useParams } from "react-router";
import "./DescriptionProduct.scss"
import ItemCount from "../../components/ItemCount/itemCount";
import { Link } from "react-router-dom";
import { useCart } from '../../components/context/CartContext';
import { getFirestore } from "../../firebase/index";
// import { useQuery } from '../../hooks/useQuery';

function DescriptionProduct() {
    const [product, setProduct] = React.useState(null);
    const { id } = useParams();
    const [loading, setLoading] = React.useState(false);
    const { addItem } = useCart();
    const [counter, setCounter] = React.useState(1);
    // let query = useQuery();
    const styles = { color: 'orange', textDecoration: 'underline', textAlign: 'center', display: 'flex', flexDirection: 'row' };

    React.useEffect(() => {
        setLoading(true);
        //Apunta a la base de datos
        const dataBase = getFirestore();
        //Apunta a la coleccion de base de datos
        const productCollection = dataBase.collection("Products");
        //Apunta a un elemento

        productCollection
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.empty) {
                    console.log("No hay productos");
                }else {
                    setProduct(
                        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                    );
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [id])

    const addToCart = () => {
        const test = { ...product, cantidad: counter };
        addItem(test);
    };

    if (loading) {
        return <p>Cargando Sitio...</p>;
    } else {
        return (
            <div className="content" style={{display: 'flex' , flexDirection: 'column'}}>
                <h1 style={styles}>{product?.title}</h1>
                <div><img src={product?.image} alt="" /></div>
                <img className="image" src={product?.image} alt="producto" />
                <p className="description"> Detalle: {product?.description}</p>
                <p className="description"> Precio: {product?.price}</p>
                <p className="count">Cantidad: <ItemCount counter={counter} setCounter={setCounter} /></p>
                <Link to={"/Cart"}>
                    <button onClick={addToCart} className="btn btn-danger">Agregar al carrito</button>
                </Link>
            </div>
        );

    }
}
export default DescriptionProduct;

// fetch(`https://fakestoreapi.com/products/${id}`)
// .then((response) => response.json())
// .then((data) => setProduct(data))
// .catch((error) => console.log("Hubo un error inesperado"))
// .finally(() => setLoading(false));
// }, [id]);

//    {/* <p className="description">Color: {query.get("color")}</p>
//                 <p className="description">Talle: {query.get("talle")}</p>
//                 <p className="description">Precio: ${product?.price}</p> */}