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
          const token = json.token
            console.log(token)
            const tokenUser = localStorage.setItem("token", token)

          if(tokenUser!== null && json.role === "garcom") {
            routerSalao();
          }else if(tokenUser!== null && json.role === "cozinheiro") {
            routerCozinha();
          }else{
            alert("Usuario não encontrado")
          }
        })
    };
  
    return (
      <div className="Login">
        <h1 className="LoginTitle">Entrar</h1>
        <form className="LoginForm">
          
          <label className="LoginLabel" htmlFor="loginInputEmail">E-mail:</label>
          <input type="text" placeholder="E-mail" className="LoginInput" value={email} id="loginInputEmail" onChange={(event) => setEmail(event.target.value)}/>
  
          <label className="LoginLabel" htmlFor="loginInputPassword">Senha:</label>
          <input type="password" placeholder="Senha" className="LoginInput" value={password} id="loginInputPassword" onChange={(event) => setPassword(event.target.value)} />
         
          <button className="btnLogin" onClick={loginBtn}>Login</button>
        </form>
      </div>
    );
  }
  
  export default Login;
  