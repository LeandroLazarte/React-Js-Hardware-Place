import React from "react";
import "./ItemListContainer.scss";
import Card from "../card/Card";
import { getFirestore } from "../../firebase/index";


const ItemListContainer = () => {
  const [data, setData] = React.useState([]);

 React.useEffect(() => {
    const dataBase = getFirestore();
    const productsColecction = dataBase.collection("Products")
    .orderBy("id","asc");
    console.log(
      productsColecction
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            console.log("No hay productos");
          } else {
            setData(
              querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}))
            );
          };
        })
        .catch(() => {})
        .finally(() => {})
    );
  }, []);

  return (
    <div className="card d-inline-flex p-2">
      {data.map((product) => {
        return (
          <Card
            productId={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
          />
        );
      })}
    </div>
  )
};

export default ItemListContainer;


