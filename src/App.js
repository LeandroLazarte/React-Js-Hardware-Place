import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DescriptionProduct from "./pages/DescriptionProduct";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Registro from "./pages/Registro";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/product/:id" component={DescriptionProduct} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/registro" component={Registro} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
