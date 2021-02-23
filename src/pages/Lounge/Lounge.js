import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logoburger from '../../img/logoburger.png';
import './Lounge.css'


export const Lounge = () => {
    const route = useHistory();
    const loginRoute = () => {
        route.push('/')
      }
    const orderRoute = () => {
      route.push('/CreateOrder')
    }

    const handleCreateOrder = (event) => {
        event.preventDefault();
        orderRoute();
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
