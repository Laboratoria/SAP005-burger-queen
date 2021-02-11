// import React from 'react';

import React,{useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import './login.css';


function Login(){

    const history = useHistory()

    const routerRegister=()=>{
        history.push('/Register')
      }

    // const routerHall=()=>{
    //   history.push('/Hall')
    // }
    // const routerKitchen=()=>{
    //   history.push('/Kitchen')
    // }
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    <h1>Página Inicial/login</h1>

    function btnLogin(event){
        event.preventDefault();
        console.log("nabrazetis")
        
    };

    return(
        <div className="App">
            <h1 className="login"></h1>
            <form className="loginForm">
                
                <input type="text" placeholder="E-mail*" value={email}  id="emailInput" onChange={(event) => setEmail(event.target.value)}/>

                <input type="password" placeholder="Senha*" value={password} id="loginInput" onChange={(event) => setPassword(event.target.value)}/>

                <button className="loginBtn" onClick={btnLogin}>Acessar</button>

               <p>Novo por aqui? <button className="loginBtn" onClick={routerRegister}>Registre-se</button></p>


            </form>
        </div>
    )

    
};


export default Login;