import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import logoburger from '../img/logoburger.png';
import './Header.css'

const Header = () => {
  const route = useHistory();
  const loungeRoute = () => {
    route.push('/Lounge')
  }

  function BackBtn(event) {
    event.preventDefault();
      window.history.back()
  }
  
  return (
    <>
    
     <svg onClick={BackBtn}mlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
     </svg>
       
        <header>        
          <img src={logoburger} className="logoburger" alt="logoburger" />
          <h1>Pedidos</h1>
        </header>
        
      

    </>

  );
};

export default Header;