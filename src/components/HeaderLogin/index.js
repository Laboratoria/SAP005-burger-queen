import React from 'react';
import Logo from '../../assets/Logo_Burger-Beef .png';
import '../../styles/HeaderLogin.css';

export default HeaderLogin => {
    return (
        <header className="header-login">
        <img className="logo-login" src={Logo} alt='logo' />
        </header>
    
    );
  }