import React from 'react'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () =>{
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer/>
  </div>
  );
};

export default App;
