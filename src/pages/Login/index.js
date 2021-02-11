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
                <h1>Acessa App</h1>

                <div className="loginInputEmail">
                    <MdEmail/>
                    <input type="text" placeholder="Email"/>
                </div>

                <div className="loginInputPassword">
                    <MdLock/>
                    <input type="text" placeholder="Senha"/>
                </div>

                <div className="loginInputRadio">
                    <input type="radio" id="hall" name="function" value="hall"/><label>Salão</label>
                    <input type="radio" id="hall" name="function" value="kitchen"/><label>Salão</label>
                </div>

                <button type="submit">Entrar</button>
                <h4>Não tem uma conta?<a href="linkDeCadastro"> Cadastre-se.</a></h4>
            </div>           
        </div>    
    )
}

export default Login;