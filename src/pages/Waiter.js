import '../style/Waiter.css';
import React from "react";
import {useHistory} from 'react-router-dom'
import logo from '../images/logo.png';
import exit from '../images/exit.jpeg';


function Waiter() {
  const history = useHistory()
  const rLogin=()=> {
    history.push('/')
  }
  return (
    <div className="App">
      <nav className="nav">
        <button className="exit"   onClick={rLogin}>
      <img src= {exit} alt="" className="exit"/></button>
      </nav>
      <header className="App-header">
        <img src= {logo} alt="" className="logo"/>
      <div>PEDIDOS</div>
      </header>
    </div>
  );
}


export default Waiter;