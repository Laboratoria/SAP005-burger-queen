import '../style/Kitchen.css';
import React from "react";
import {useHistory} from 'react-router-dom'
import logo from '../images/logo.png';
import menuburguer from '../images/menuburguer.png';
import add from '../images/add.png';
import { useState } from 'react';

function Kitchen() {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");
  // const [pronto, setPronto] = useState([]);
  const productId = sessionStorage.getItem("product.id");
  console.log(productId); 

  // function Status(item) {
  //   item.id = [];
  //   setPronto([pronto, item]);
  //   console.log(item);
  //   console.log(pronto)
  // }
  // console.log(pronto);

  const history = useHistory()
  const rLogin=()=> {
    history.push('/')
  }

  
  return (
    <div className="AppKitchen">
      <div className="nav1">
          <input type="checkbox" id="check"></input>
          <label id="icone" for="check"><img className="btn-burguer" src={menuburguer} alt="" /></label>

          <div class="menuLateral">
            <nav>
              <a href={rLogin}><div onClick={rLogin} className="link">Sair</div></a>
            </nav>
          </div>
        </div>
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
            <p  className="tble">Mesa: {order.status}</p>
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
              fetch(`https://lab-api-bq.herokuapp.com/orders/${order.id}`, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json",
                    'Authorization': `${token}`
                  }  
                , body: JSON.stringify({"status": "pronto"})              
          
              })
                      .then((response) => response.json())
                      .then((json) => {
                        // setPronto(json);
                        console.log(json);
                       })
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