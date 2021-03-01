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
  // const [Pronto, setPronto] = useState([]);
  // const productId = sessionStorage.getItem("product.id");
  // console.log(productId); 

  const history = useHistory()
  const rLogin=()=> {
    history.push('/')
  }

  
  return (
    <div className="AppKitchen">
      <nav className="navK">
        <button className="exit"   onClick={rLogin}>
      <img src= {exit} alt="" className="exit"/></button>
      </nav>
      <header className="App-Kitchen">
        <img src= {logo} alt="" className="logoKitchen"/>
        
     
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
                      })
                  }}><img src= {add} alt="" className='imgMenu' /></button>
                  
      </header>
     <section className="section">

      { orders.map((order) => {

        return (
          <div className="Cl" key={order.id}>
            <p className="nameClient">Cliente: {order.client_name}</p>
            <p  className="tble">Mesa: {order.table}</p> 
            <p className="pedido">Pedido</p>
            <div>
            
              {
                order.Products.map((product)=> {
                  return(
                    <div key={product.id}> 
                    <p className="prod">{product.name}</p>
                    </div>
                  )
                })
              }
              <button className="food" onClick={(e)=>{
              e.preventDefault();
              // fetch('https://lab-api-bq.herokuapp.com/orders/${}', {
              //   method: "PUT",
              //   headers: {
              //     "Content-Type": "application/json",
              //     "accept": "application/json",
              //     'Authorization': `${token}`
              //   }  
              //  , body: JSON.stringify({"status": Pronto})              
          
              // })
              //         .then((response) => response.json())
              //         .then((json) => {
              //           setPronto(json);
              //         })
                  }}>Pedido Pronto</button>
            </div>
          </div>
        )
      })}
      </section>
    </div>
  );
}


export default Kitchen;