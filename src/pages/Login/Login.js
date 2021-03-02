import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logoburger from '../../img/logoburger.png';
import './Login.css';

export const Login = () => {
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const routes = useHistory();

    const loungeRoute = () => {
        routes.push('/Lounge')
    }

    const kitchenRoute = () => {
        routes.push('/Kitchen')
    }

    function LoginBtn(event) {
        event.preventDefault();

    fetch('https://lab-api-bq.herokuapp.com/auth', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `email=${email}&password=${password}`
    })
        .then(result => result.json())
        .then((data) => {
            console.log(data);
            setEmail('')
            setPassword('')
            localStorage.setItem('token', data.token);
            if(data.role === "lounge") {
                loungeRoute();
            }
            if(data.role === "kitchen") {
                kitchenRoute();
            }
        });
    }    

    return (
        <div className="Login">
            <header>
                <img src={logoburger} className="logoburger" alt="logoburger" />
                <h1>Acesse sua conta</h1>
            </header>
            <form>
                <input type="text" name="email" placeholder="E-mail" id="input-login" value={email} onChange={(event) => setEmail(event.target.value)} />
                <input type="password" name="password" placeholder="Senha" id="input-password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <button type="submit" id="login-btn" onClick={LoginBtn}>Entrar</button>
            <p>
                Não possui cadastro?
            <Link to='/Register'> Registre-se</Link>
            </p>
            </form>
        </div>
    )
};