import './App.css';
import React from "react";
import logo from './logo.png';
import panela from './panela.png';
import hand from './hand.png';


function singnUp() {
    return (
      <div className="singnUp">
        <header className="singnUp-header">
        <img src= {logo} alt="" className="logo"/>
        <p className="selector">
        <img src= {panela} alt="" className="logop"/>
        <img src= {hand} alt="" className="logoh"/>
        </p>
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