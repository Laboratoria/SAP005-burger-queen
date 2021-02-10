import './App.css';
import React from "react";
import {Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src= "./src/img/Logo.png" alt=""/>

        <form className="form">
        <input type="text" id="email" placeholder="Digite seu e-mail"/>
        <input type="text" id="pass" placeholder="Digite sua senha"/>
        <button id="login">ENTRAR</button>
        </form>
        <Link to="/singnUp" className="register">Cadastre-se aqui </Link>
      </header>
    </div>
  );
}

export default App;