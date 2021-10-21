import React from "react";
import "./ItemListContainer.scss";
import Card from "../card/Card";
import { getFirestore } from "../../firebase/index";

const ItemListContainer = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const dataBase = getFirestore();
    const productsColecction = dataBase
      .collection("Products") //.where('price', '>=', "100000")
      .orderBy("id", "asc");
    console.log(
      productsColecction
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            console.log("No hay productos");
          } else {
            setData(
              querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            );
          }
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    );
  }, []);
  if (loading) {
    return <p>Cargando Sitio...</p>;
  } else {
    return (
      <div style={{ maxWidth: "800px", marginInLine: "auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {data.map((product) => {
            return (
              <Card
                productId={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                category={product.category}
              />
            );
          })}
        </div>
      </div>
    );
    
  }
};

export default ItemListContainer;
