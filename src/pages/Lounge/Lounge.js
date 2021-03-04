import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from '../../components/Header.js';
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
      <>
      <Header />
      <h1>Pedidos</h1>
        <div className="container">
          
        <div>            
            <button className='createorder-btn' onClick={handleCreateOrder}>Criar Pedido</button>
            <button className='orderread-btn' onClick={handleReadyOrder}>Pedidos Prontos</button>
        </div>
        
        </div>
        </>
     )
          
};
