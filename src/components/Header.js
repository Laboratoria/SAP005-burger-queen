import React, { useState } from 'react';
import logoburger from '../img/logoburger.png';
import './Header.css'

const Header = () => {

  return (
    <>
      
        <header>
          <img src={logoburger} className="logoburger" alt="logoburger" />
          <h1>Pedidos</h1>
        </header>
        
      

    </>

  );
};

export default Header;