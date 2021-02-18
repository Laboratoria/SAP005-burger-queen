import './LoginRegister.css';
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'


function Login() {  
  const history = useHistory()

  const routerHall=()=>{
    history.push('/Hall')
  }
  const routerRegister=()=>{
    history.push('/Register')
  }

  const routerKitchen=()=>{
    history.push('/kitchen')
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
      const id = json.id
      const tokenUser = localStorage.setItem("token", token)
      const idUser = localStorage.setItem("id", id)

      if(tokenUser!== null && idUser!== null && json.role === "garcom") {
        routerHall();
      }else if(tokenUser!== null && idUser!== null && json.role === "cozinheiro") {
        routerKitchen();
      }else{
        alert("Usuario não encontrado, verifique seu Email e Senha")
      }
    })
};

    return (
      <div class="overlay">
  <form>
    <div class="con">
      <header class="head-form">
        <h2>Login</h2>
        <p>Faça o login aqui usando seu email de usuário e senha</p>
      </header>
      <div class="field-set">
        <label for="loginInputEmail"></label>
        <input autocomplete="off" class="form-input" type="email" placeholder="E-mail" 
          id="loginInputEmail" onChange={(event)=> setEmail(event.target.value)} required  value={email}/>

<label for="loginInputPassword"> </label>
        <input autocomplete="off" class="form-input" type="password" placeholder="Senha"  name="password"  
          id="loginInputPassword" onChange={(event)=> setPassword(event.target.value)} required value={password} />

        <button type="submit" class="btn submits login" onClick={loginBtn}>Login</button>
        <div class="other">
          <button class="btn submits sign-up" onClick={routerRegister}>Cadastro
          </button>
        </div>
      </div>
    </div>
  </form>
</div>
    );
  }
 


  export default Login;
  

     
   
