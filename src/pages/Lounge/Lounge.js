import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logoburger from '../../img/logoburger.png';
import './Lounge.css'


export const Lounge = () => {
    const route = useHistory();
    const loginRoute = () => {
        route.push('/')
      }
    const kitchenRoute = () => {
        route.push('/Kitchen')
      }
    const handleCreateOrder = (event) => {
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvYmVydGFAYm5tLmNvbSIsImlkIjo2MDgsImlhdCI6MTYxMzY1OTQ4MSwiZXhwIjoxNjQ1MjE3MDgxfQ.4IK5_6Iz6q4cTqrKhU1q4_gXvefTAh75U_3aH8mxDZc");
        myHeaders.append("Content-Type", "application/json");

        var raw = "";

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

    fetch("https://lab-api-bq.herokuapp.com/products", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
        }
      function BackBtn(event) {
        event.preventDefault();
        loginRoute();
      }
    
    return(
        <div className="container">
          <header>
            <img src={logoburger} className="logoburger" alt="logoburger" />
            <h1>MENU</h1>
        </header>
        <div>            
            <button className='createorder-btn' onClick={handleCreateOrder}>Criar Pedido</button>
            <button className='orderread-btn'>Pedidos Prontos</button>
        </div>
        <div> 
            <button id="back-btn" onClick={BackBtn}>Voltar</ button>
        </div>
        </div>
     )
          
};