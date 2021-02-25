import '../style/Kitchen.css';
import React from "react";
import {useHistory} from 'react-router-dom'
import logo from '../images/logo.png';
import exit from '../images/exit.jpeg';
import add from '../images/add.png';
import { useState } from 'react';

function Kitchen() {
  // const [ setMenu] = useState([]);
  // const [ setDay] = useState([]);
  // const [products, setProducts] = useState([]);
  // const [client, setClient] = useState('');
  // const [table, setTable] = useState('');
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  

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
      <section className="product">

      { orders.map((order) => {

        return (
          <div key={order.id}>
            <p>Cliente: {order.client_name}</p>
            <p>Mesa: {order.table}</p> 
            <p className="pedido">Pedido</p>
            <div>
              {
                order.Products.map((product)=> {
                  return(
                    <div key={product.id}> 
                    <p>{product.name}</p>
                    <button className="food">Entregue</button>
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