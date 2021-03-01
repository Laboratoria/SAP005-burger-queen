import React, { useState } from 'react';
import logoburger from '../img/logoburger.png';
import './Lounge.css'

const Header = () => {

  return (
    <>
      
        <header>
          <img src={logoburger} className="logoburger" alt="logoburger" />
          <h1>MENU</h1>
        </header>
        <h1>Criar Pedido</h1>
      

    </>

  );
};

export default Header;