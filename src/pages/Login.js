import './Login.css';
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'


function Login() {  
  const history = useHistory()

  const routerSalao=()=>{
    history.push('/salao')
  }
  const routerCozinha=()=>{
    history.push('/cozinha')
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
    function loginBtn(e) {
      e.preventDefault();
      fetch('https://lab-api-bq.herokuapp.com/auth', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body :`email=${email}&password=${password}`
        
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          if(json.role === "garcom") {
            routerSalao();
          }
          if(json.role === "cozinheiro") {
            routerCozinha();
          }
        })
    };
  
    return (
      <div className="App">
        <h1 className="Login">Entrar</h1>
        <form className="LoginInput">
          
          <label htmlFor="loginInputEmail">E-mail:</label>
          <input type="text" placeholder="E-mail" className="cadInput" value={email} id="loginInputEmail" onChange={(event) => setEmail(event.target.value)}/>
  
          <label htmlFor="loginInputPassword">Senha:</label>
          <input type="text" placeholder="Senha" className="cadInput" value={password} id="loginInputPassword" onChange={(event) => setPassword(event.target.value)} />
         
          <button className="btnLogin" onClick={loginBtn}>Login</button>
        </form>
      </div>
    );
  }
  
  export default Login;
  