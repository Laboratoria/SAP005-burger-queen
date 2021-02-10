import './App.css';
import React from "react";


function singnUp() {
    return (
      <div className="singnUp">
          <img src= "../img/Logo.png"  alt="logo"/>
        <header className="singnUp-header">
        <form className="form">
        <input type="text" id="email" placeholder="Digite seu e-mail"/>
        <input type="text" id="email" placeholder="Digite seu nome"/>
        <input type="text" id="pass" placeholder="Digite sua senha"/>
        <button id="singnupBtn">CADASTRAR</button>
        </form>
        </header>
      </div>
    );
  }
  
  export default singnUp;
