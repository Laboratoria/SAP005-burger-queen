import './App.css';
import React from "react";
import { Link } from 'react-router-dom';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="" className="logo" />
        <div className="registerLogin">
          <form className="form">
            <input type="text" id="email" placeholder="Digite seu e-mail" />
            <input type="text" id="pass" placeholder="Digite sua senha" />
            <button id="login">ENTRAR</button>
          </form>
          <Link to="/singnUp" className="register">Não possuí conta? Cadastre-se. </Link>
        </div>
      </header>
    </div>
  );
}

export default App;