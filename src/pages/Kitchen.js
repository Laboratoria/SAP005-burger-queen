import '../style/Kitchen.css';
import React from "react";
import {useHistory} from 'react-router-dom'
import logo from '../images/logo.png';
import exit from '../images/exit.jpeg';
import add from '../images/add.png';


function Kitchen() {
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
      <div>COZINHA</div>
      <button className="btnMenu"   onClick={((e)=>{
              e.preventDefault();
              console.log('cozinha')
            })}><img src= {add} alt="" className='imgMenu' /></button>
      </header>
    </div>
  );
}


export default Kitchen;