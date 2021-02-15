import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Title, Form, Template, PageLogin, Input, ButtonLogin, Register, Images, BurgerImage } from '../../stylesForm';
import Burger from '../../imagens/burger.png'
import Logo from '../../imagens/logoBranco.png'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //  const [token, setToken] = useState('');
    const history = useHistory();
    const goToHall = () => {
        history.push('/Hall');
    }
    const goToKitchen = () => {
        history.push('/Kitchen');
    }

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
                // setToken(json.token);
                if (json.role === 'salao') {
                    goToHall();
                }
                else if (json.role === 'cozinha') {
                    goToKitchen();
                }
            });

    }

    return (
        <PageLogin>
            <Form>
                <form onSubmit={handleSubmit}>
                    <Title>Faça seu Login</Title>
                    <Input
                        type="text"
                        placeholder="E-mail"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                    />
                    <ButtonLogin>Entrar</ButtonLogin>

                    {/* <p>{token}</p> */}
                </form>

                <Register> Não tem conta? <NavLink to="/register"> Registre-se</NavLink></Register>
            </Form>
            <Template>
                <Images>
                    <img src={Logo} alt='' />
                    <BurgerImage src={Burger} alt='' />
                </Images>
            </Template>
        </PageLogin>
    );
};

export default Login;