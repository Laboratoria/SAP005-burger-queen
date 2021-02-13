import React from 'react'
import './login.css';

import { MdEmail, MdLock } from 'react-icons/md';

const Login = () => {
    return (
        <div className="login">
            <div className="login-logo">
                <img src="imgs/logotipo.png"alt="logo-app"/>
            </div> 
            <div className="login-right">
                <div className="loginInputEmail">
                    <MdEmail/>
                    <input type="text" placeholder="Email"/>
                </div>

                <div className="loginInputPassword">
                    <MdLock/>
                    <input type="text" placeholder="Senha"/>
                </div>

                <button type="submit">Entrar</button>
                <h4>Não tem uma conta?<a href="/register"> Cadastre-se.</a></h4>
            </div>           
        </div>
            
    )
}

export default Login;