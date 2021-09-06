import React from 'react'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import Card from './components/card/Card';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () =>{
  return (
    <div>
    <NavBar/>
    <ItemListContainer/>
    <div className ="card" style={{display:"flex"}}>
    <Card 
      src="./assets/monitorGigabyte.webp"
      title="Monitor Gigabyte 240Hz"
      description="Gigabyte 240Hz 0.5ms"
      price= "$117.950"
    />
    <Card
    src="./assets/monitorLG.webp"
    title="Monitor LG 144Hz"
    description="LG 144Hz 1ms"
    price= "$85.290"
    />
    <Card
    src="./assets/monitorSamsung.webp"
    title="Monitor Samsung 60Hz"
    description="Samsung 60Hz 5ms"
    price= "$28.900"
    />
    <Card
    src="./assets/graficaEVGA.webp"
    title="Gráfica EVGA"
    description="EVGA RTX 3090 24Gb"
    price= "$320900"
    />
    <Card
    src="./assets/graficaMSI.webp"
    title="Gráfica MSI"
    description="MSI RTX 3080 10Gb"
    price= "$250000"
    />
    <Card
    src="./assets/graficaGigabyte.webp"
    title="Gráfica Gigabyte"
    description="Gigabyte RTX 3070 8Gb"
    price= "$190890"
    />
    </div>
  </div>
  );
};

export default App;
