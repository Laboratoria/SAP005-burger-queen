import React from 'react';
import { useHistory } from 'react-router-dom';
import logoburger from '../img/logoburger.png';
import swal from 'sweetalert';
import './Header.css';

const Header = () => {
    let name = localStorage.getItem('name');

  const route = useHistory();

  function BackBtn(event) {
    event.preventDefault();
    window.history.back()
  }

  const handleSignOut = () => {
    swal({
      title: 'Bom trabalho!',
      text: 'Usuário deslogado.',
      icon: 'success',
      button: 'OK',
      timer: '3000',
    });
    localStorage.clear();
    route.push('/');
  };

  return (
    <>

     <div className="flex-container">
      <svg onClick={BackBtn} xmlns="http://www.w3.org/2000/svg" width="53" height="53" fill="currentColor" className="bi bi-arrow-left-square" viewBox="0 0 16 16" className="back-btn-header">
        <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
      </svg>
      <svg onClick={handleSignOut}xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16" className="signout-btn">
        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
      </svg>
    </div>
    
      
      <header>
        <img src={logoburger} className="logoburger" alt="logoburger" />
      </header>
      <h1>Bem vindx, {name}!</h1>


    </>

  );
};

export default Header;