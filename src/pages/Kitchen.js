import '../style/Kitchen.css';
import React from "react";
import logo from '../images/logo.png';


function Kitchen() {
  return (
    <div className="App">
      <header className="App-header">
        <img src= {logo} alt="" className="logo"/>
      <div>COZINHA</div>
      </header>
    </div>
  );
}

export default Kitchen;