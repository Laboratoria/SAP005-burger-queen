import React from "react";
import { useHistory } from "react-router-dom";
import logoburger from '../../img/logoburger.png';
import Footer from '../../components/Footer.js';
import './Lounge.css'


export const Lounge = () => {
  let name = localStorage.getItem('name');
  const route = useHistory();  
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

  const handleSignOut = () => {
    alert('Usuário deslogado');
    localStorage.clear();
    route.push('/');
  };

  return (
    <>
      <svg onClick={handleSignOut} xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16" className="signout-btn-kitchen">
        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
      </svg>
      <img src={logoburger} className="logoburger" alt="logoburger" />
      <h1 className="h1-lounge">Bem-vindo(a){name}</h1>
      <div className="container">

        <div>
          <button className='createorder-btn' onClick={handleCreateOrder}>Criar Pedido</button>
          <button className='orderread-btn' onClick={handleReadyOrder}>Pedidos Prontos</button>
        </div>

      </div>
  
  <div className="footer-lounge">
  <Footer />
  </div>
    </>
  )

};
