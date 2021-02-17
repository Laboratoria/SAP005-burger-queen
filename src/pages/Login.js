import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
        .then(result => {
            console.log(result);
            if(result.role === "lounge") {
                loungeRoute();
            }
            if(result.role === "kitchen") {
                kitchenRoute();
            }

        });
    }    

    return (

        <div>
            <header>
                <h1>Login</h1>
            </header>
            <form>
                <input type="text" name="email" placeholder="E-mail" id="input-login" value={email} onChange={(event) => setEmail(event.target.value)} />
                <input type="password" name="password" placeholder="Senha" id="input-password" value={password} onChange={(event) => setPassword(event.target.value)} />
                <button type="submit" id="login-btn" onClick={LoginBtn}>Entrar</button>
            </form>
            <p>
                Não possui cadastro?
            <Link to='/Register'>Registre-se</Link>
            </p>
        </div>
    )
};