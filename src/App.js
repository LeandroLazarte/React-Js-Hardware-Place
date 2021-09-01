import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';


const App = () =>{

const myFunction = () =>{
  alert('¡Bienvenidos a Hardware Place!');
};

let age = 18;

  return (
    <div>
    <NavBar/>
    <div className="first-div">
  <h1 className="title">¡Bienvenidos a Hardware Place!</h1>
  <div>
    <p className="paragraph">Nombre: Leandro</p>
    <p className="paragraph">Apellido: Lazarte</p>
    <p className="paragraph">Edad: {2 + 24}</p>
    {age>= 18 ? <p className="paragraph">Es Mayor de edad</p>: <p className="paragraph">Es menor de edad</p>}
  </div>
  <button className="btn btn-danger" id="button" onClick={myFunction}>Click Here</button>
  </div>
  </div>
  );
};

export default App;
