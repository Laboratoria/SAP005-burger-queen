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
    const ReadyOrder = () => {
      route.push('/ReadyOrder')
    }

    const handleCreateOrder = (event) => {
        event.preventDefault();
        orderRoute();
      }

    const handleReadyOrder = (event) => {
        event.preventDefault();
        ReadyOrder();
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
            <button className='orderread-btn' onClick={handleReadyOrder}>Pedidos Prontos</button>
        </div>
        <div> 
            <button id="back-btn" onClick={BackBtn}>Voltar</ button>
        </div>
        </div>
     )
          
};