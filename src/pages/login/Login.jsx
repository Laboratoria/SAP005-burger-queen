import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [setToken] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        fetch('https://lab-api-bq.herokuapp.com/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((json) => {
                console.log(json);
                setToken(json.token);
                return json;
            });
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h2>Faça seu Login</h2>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                />
                <input
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                />
                <button>Entrar</button>
            </form>
            <p>Não tem conta? <Link to="/register"> Registre-se</Link></p>
        </section>
    );
};

export default Login;