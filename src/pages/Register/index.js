// import React from 'react';

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'



function Register() {

    const history = useHistory()

    const routerBack = ()=>{
      history.push('/Login')
    }

   

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [choice, setChoice] = useState('');


    <h1>Página Inicial/login</h1>

    function btnRegister(event) {
        event.preventDefault();
        console.log("nabrazetis")

    };


    return (

        <div className="App">
            <h1 className="login">Register</h1>
            <form className="loginForm">

                <input type="text" placeholder="Nome*" value={name} id="cadName" onChange={(event) => setName(event.target.value)} />

                <input type="text" placeholder="E-mail*" value={email} id="cadEmail" onChange={(event) => setEmail(event.target.value)} />

                <input type="password" placeholder="Senha*" value={password} id="cadPassword" onChange={(event) => setPassword(event.target.value)} />



                <button className="loginBtn" onClick={btnRegister}>Cadastrar</button>



            </form>




        </div>

    );
};

export default Register;