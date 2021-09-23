import React from "react";
import "./ItemListContainer.scss";
import Card from "../card/Card";

const ItemListContainer = () => {
  const [data, setData] = React.useState([]);
  //   const [loading, setLoad] = React.useState(false);

  React.useEffect(() => {
    const url = "https://fakestoreapi.com/products?limit=6";

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => setData(data))
      .catch((error) =>
        console.log(`Hubo un error inesperado ${error.status}`)
      );
  }, []);

  console.log(data);

  //   const buyProduct = (product) => {
  //       console.log(`Se ha añadido al carrito ${product}` );
  //   }

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {data.map((product) => {
        return (
          <Card
            key={product.id}
            productId={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            category={product.category}
          />
        );
      })}
    </div>
  );
};

export default ItemListContainer;
