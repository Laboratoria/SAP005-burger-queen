import '../style/Historic.css';
import React from "react";
import {useHistory} from 'react-router-dom'
import logo from '../images/logo.png';
import exit from '../images/exit.jpeg';


function Historic() {
    
    const history = useHistory()
    const rLogin=()=> {
      history.push('/')
    }

    const rWaiter=()=> {
        history.push('/Waiter')
      }

    return (

      <div className="AppHistoric">

        <nav className="nav">
            <button className="histo" onClick={rWaiter}>Menu</button>
            <button className="exit"   onClick={rLogin}>
                <img src= {exit} alt="" className="exit"/></button>         
        </nav>

        <header className="App-Historic">
  
          <img src= {logo} alt="" className="logoHistoric"/>
          <p className="Cozinha">Pedidos Prontos</p>           
        </header>
        
      </div>
    );
  }
  



export default Historic;