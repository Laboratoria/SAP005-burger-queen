import React from 'react'
import './login.css';

import { MdEmail, MdLock } from 'react-icons/md';

const Login = () => {
    return (
        <div className="login">
            <div className="login-logo">
                <img src="imgs/logo.jpg"alt="logo-app"/>
            </div> 
            <div className="login-right">
                <h1>Acessa App</h1>

                <div className="loginInputEmail">
                    <MdEmail/>
                    <input type="text" placeholder="Digite um email"/>
                </div>

                <div className="loginInputPassword">
                    <MdLock/>
                    <input type="text" placeholder="Digite sua senha"/>
                </div>

                <button type="submit">Entrar</button>
                <h4>Não tem uma conta?</h4>
                <button type="submit">Cadastra-se</button>
            </div>           
        </div>    
    )
}

export default Login;