import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar";
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ShoppingContext } from "./components/context/CartContext";
import DescriptionProduct from "./pages/details/DescriptionProduct";
import Home from "./pages/Home/Home";
import Nosotros from "./pages/Nosotros/Nosotros";
import Contacto from "./pages/Social/Contacto";
import Registro from "./pages/Registro/Registro";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <ShoppingContext>
    <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/product/:id" component={DescriptionProduct} />
          <Route path="/nosotros" component={Nosotros} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/registro" component={Registro} />
          <Route path="/" component={Home} />
        </Switch>
    </BrowserRouter>
    </ShoppingContext>
  );
}

export default App;
