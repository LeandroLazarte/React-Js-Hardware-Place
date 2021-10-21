import React from "react";
import { useParams, useHistory} from "react-router";
import ItemCount from "../../components/ItemCount/itemCount";
import { useCart } from '../../components/context/CartContext';
import { getFirestore } from "../../firebase/index";
import {Row, Col, message,Skeleton,Divider,Button,Rate} from "antd"
import axios from "axios";

const description = () => {
    const [dataProduct, setDataProduct] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [count, setcount] = React.useState(1);
    const {addToCart} = useCart();
    const {id} = useParams();
    let story = useHistory();
    
    const addCount = () => {
        if (count < dataProduct[0]?.rating.count) {
            const value = count + 1;
            setcount(value);
        }else{
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
        const takeData = {...dataProduct[0], amount:count };
        addToCart(takeData);
        message.success("Se ha agregado el producto")
    }
}




































