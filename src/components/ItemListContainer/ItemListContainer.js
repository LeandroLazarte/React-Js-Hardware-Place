import React from 'react';
import './ItemListContainer.scss';
import Card from '../card/Card';

const products = [
    {   
        id :0,
        img: "./assets/graficaEVGA.webp",
        title:"Monitor Gigabyte 240Hz",
        description:"Gigabyte 240Hz 0.5ms",
        stock:50,
        price:"$117.900"
    },
    {   
        id :1,
        img: "./assets/monitorLG.webp",
        title:"Monitor LG 144Hz",
        description:"LG UltraGear 144Hz",
        stock:30,
        price:"$46.900"
    },
    {   
        id :2,
        img: "./assets/monitorSamsung.webp",
        title:"Monitor Samsung 60Hz",
        description:"Samsung Dark 60Hz ",
        stock:100,
        price:"$25.999"
    },
    {   
        id :3,
        img: "./assets/graficaEVGA.webp",
        title:"Gráfica EVGA",
        description:"EVGA RTX 3090 24Gb",
        stock:10,
        price:"$320.900"
    },
    {   
        id :4,
        img: "./assets/graficaMSI.webp",
        title:"Gráfica MSI",
        description:"MSI RTX 3080 10Gb",
        stock:30,
        price:"$250.000"
    },
    {   
        id :5,
        img: "./assets/graficaGigabyte.webp",
        title:"Gráfica Gigagyte",
        description:"Gigabyte RTX 3070 8Gb",
        stock:50,
        price:"$190.500"
    },
];
const ItemListContainer = () =>{
const [items, setItems] = React.useState([]);
const [loading, setLoad] = React.useState(false)

    React.useEffect (() =>{
    setLoad(true);
        getProductos()
        .then((result)=>setItems(result))
        .finally(()=>setLoad(false));
    }, []);

    const buyProduct = (product) =>{
        console.log(`Has comprado el producto: ${product}`);
    };
    
    const getProductos = () =>{
        return new Promise ((resolve) =>{
            setTimeout(() => {
                resolve(products)
            }, 2000);
        });
    };
    return (
        <div style={{display:"flex", justifyContent:"space-around"}}>
        {loading ? <p>Cargando... </p> : null}
            {items?.map((product) =>{
                return (
                 <Card
                    key={product.id}
                    img={product.img}
                    title={product.title}
                    description={product.description}
                    stock={product.stock}
                    price={product.price}
                    comprar={buyProduct}
                 />
                )
            })}
        </div>
    )
}

export default ItemListContainer