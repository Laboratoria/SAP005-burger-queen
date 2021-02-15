import './App.css';
import React from "react";
import logo from './logo.png';
import panela from './panela.png';
import hand from './hand.png';


function singnUp() {
  return (
    <div className="singnUp">
      <header className="singnUp-header">
        <img src={logo} alt="" className="logo" />
        <div className="divRegister">
          <div className="selector">
            <label>
              <img src={panela} alt="" className="logop" />
              <input type="radio" id="selectFunction" name="kitchen" value="yes" checked="" />
            </label>
            <label>
              <img src={hand} alt="" className="logoh" />
              <input type="radio" id="selectFunction" name="hall" value="no" />
            </label>
          </div>
          <form className="form">
            <input type="text" id="email" placeholder="Digite seu e-mail" />
            <input type="text" id="email" placeholder="Digite seu nome" />
            <input type="text" id="pass" placeholder="Digite sua senha" />
            <button id="singnupBtn">CADASTRAR</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default singnUp;