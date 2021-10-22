import React from "react";
import { ShoppingOutlined } from "@ant-design/icons";
import { useParams, useHistory } from "react-router";
import ItemCount from "../../components/ItemCount/itemCount";
import { useCart } from "../../components/context/CartContext";
import { getFirestore } from "../../firebase/index";
import { Row, Col, message, Divider, Button, Image} from "antd";



const Description = () => {
  const [dataProduct, setDataProduct ] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [count, setcount] = React.useState(1);
  const { AddToCart } = useCart();
  const { id } = useParams();
  let story = useHistory();

  const addCount = () => {
    if (count < dataProduct[0]?.rating.count) {
      const value = count + 1;
      setcount(value);
    } else {
      message.warning("Ha llegado al limite");
    }
  };
  const deleteCount = () => {
    if (count > 0) {
      const value = count - 1;
      setcount(value);
    }
  };

  const addData = () => {
    const takeData = { ...dataProduct[0], amount: count };
    AddToCart(takeData);
    message.success("Se ha agregado el producto", 3);
    story.push("/cart");
  };

  React.useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const getData = getFirestore();
        const productsCollection = getData.collection("Products");
        const filterProduct = productsCollection.filter(
          (product) => product.id === parseInt(id)
        );
        setDataProduct(filterProduct);
      } catch (error) {
        message.error("No se encuentran los productos");
      } finally {
        setLoading(false);
      }
    };
    getProduct();

  }, [id]);


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
            width={600}
            height={600}
            src={dataProduct[0]?.image}
          />
        </div>
      </Col>
      <Col span={24} lg={{ span: 12 }}>
        <div style={{ marginTop: 20 }}>
          <h1>{dataProduct[0]?.title}</h1>
          <Divider>
            <h3>{dataProduct[0]?.description}</h3>
          </Divider>
          <Divider>
            <h3>{`Precio: $${dataProduct[0]?.price}`}</h3>
            <h3>{`Cantidad: ${count}`}</h3>
            <h3>{`Stock: ${dataProduct[0]?.rating.count}`}</h3>
          </Divider>
          <ItemCount addCount={addCount} deleteCount={deleteCount} />
          <div style={{ marginTop: 50, alignItems: "center" }}>
            {count !== 0 && (
              <Button
                icon={<ShoppingOutlined />}
                type="primary"
                onClick={addData}
              >
                Agregar al carrito
              </Button>
            )}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Description;
