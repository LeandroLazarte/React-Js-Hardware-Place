import React from 'react';
import {Row, Col, Button} from "antd";
import {PlusOutlined, MinusOutlined} from "@ant-design/icons";

const ItemCount = ({addCount, deleteCount}) =>{
    return(
        <Row>
            <Col>
                <Button icon={<PlusOutlined style={{color:'#2DE7B2'}}/>}onClick={addCount}>Agregar</Button>
                <Button icon={<MinusOutlined style={{color:'#FF001A'}}/>}onClick={deleteCount}>Quitar</Button>
            </Col>
        </Row>
    )
};

export default ItemCount;