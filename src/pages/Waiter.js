import './App.css';
import React from "react";
import logo from './logo.png';

function Waiter() {
  return (
    <div className="App">
      <header className="App-header">
        <img src= {logo} alt="" className="logo"/>
      <div>PEDIDOS</div>
      </header>
    </div>
  );
}

export default Waiter;