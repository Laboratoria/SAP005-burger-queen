import {useHistory } from 'react-router-dom';
import React from 'react';
import Logo from '../../assets/Logo_Burger-Beef .png';
import Logout from '../../assets/exit.png';
import '../../Styles/HeaderMain.css'


function HeaderMain(){

    const history = useHistory();

    const user = localStorage.getItem('name')
    const role = localStorage.getItem('role')

    const handleSignOut = (event) => {
        alert("Usuário deslogado")
        localStorage.clear()
        history.push('/')
    }

    return (
        
        <header>
            <section  className="header-main">
                <div className="item-header">
                    <img className="logo-main" src={Logo} alt='logo' />
                    <img className="icon-logout" src={Logout} alt='icon-logout' onClick={handleSignOut}/>
                </div>
                <div className="item-header2">
                    <h2>Bem-vindo(a) {user}!</h2>
                    <p>Setor: {role}</p>
                </div>
              
            </section>    
        </header>
     
    );
}


export default HeaderMain;
