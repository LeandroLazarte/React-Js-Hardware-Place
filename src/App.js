import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {CartProvider} from './components/context/CartContext';
import DescriptionProduct from "./pages/DescriptionProduct";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Registro from "./pages/Registro";
import Carrito from "./pages/Cart";



const App = () => {
  return (
    <BrowserRouter>
    <CartProvider>
      <NavBar />
      <Switch>
        <Route path="/cart" component={Carrito} />
        <Route path="/product/:id" component={DescriptionProduct} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/registro" component={Registro} />
        <Route path="/" component={Home} />
      </Switch>
      </CartProvider>
    </BrowserRouter>
   
  );
};

export default App;
