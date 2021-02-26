import '../style/Kitchen.css';
import React from "react";
import {useHistory} from 'react-router-dom'
import logo from '../images/logo.png';
import exit from '../images/exit.png';
import add from '../images/add.png';
import { useState } from 'react';

function Kitchen() {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");
  // const [status, setStatus] = useState('');
  

  const history = useHistory()
  const rLogin=()=> {
    history.push('/')
  }
  
  return (
    <div className="AppKitchen">
      <nav className="nav">
        <button className="exit"   onClick={rLogin}>
      <img src= {exit} alt="" className="exit"/></button>
      </nav>
      <header className="App-Kitchen">

        <img src= {logo} alt="" className="logoKitchen"/>
        <p className="Cozinha">Cozinha</p>
     
        <button className="btnAdd"   onClick={(e)=>{
              e.preventDefault();
              fetch('https://lab-api-bq.herokuapp.com/orders', {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "accept": "application/json",
                  'Authorization': `${token}`
                }                  
                    })
                      .then((response) => response.json())
                      .then((json) => {
                        setOrders(json);
                        // setClient('');
                        // setTable('');
                        // setProducts('');
                        // setDay('');
                        // setMenu('');
                      })
                  }}><img src= {add} alt="" className='imgMenu' /></button>
                  
      </header>
     <section className="section">

      { orders.map((order) => {

        return (
          <div className="Cl" key={order.id}>
            <p className="nameClient">Cliente: {order.client_name}</p>
            <p>Mesa: {order.table}</p> 
            <p className="pedido">Pedido</p>
            <div>
            
            {/* <div className="product1">
            <label>
              <input
                type="radio"
                value="pending"
                checked={status === "pending"}
                onChange={() => setStatus("pending")}
              />
              <p>Pendente</p>
            </label>
            <label className="product2">
              <input
                type="radio"
                value="Pronto"
                checked={status === "pronto"}
                onChange={() => setStatus("pronto")}
              />
              <p>Pronto</p>
            </label>
          </div> */}

              {
                order.Products.map((product)=> {
                  return(
                    <div key={product.id}> 
                    <p>{product.name}</p>
                    <button className="food">Pedido Pronto</button>
                    </div>
                  )
                })
              }
            </div>
          </div>
        )
      })}
      </section>
    </div>
  );
}


export default Kitchen;