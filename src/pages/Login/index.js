import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Login(){
  const [emailLogin, setEmail] = useState('');
  const [passwordLogin, setPassword] = useState('');
  const urlLogin = `email=${emailLogin}&password=${passwordLogin}`

  const fetchLogin = () => {
    fetch('https://lab-api-bq.herokuapp.com/auth', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: urlLogin

    })
      .then((response) => response.json())
      .then(() => {
        setEmail('');
        setPassword('');
      })
  }

 

    return (
      <div>
          <h1>Login</h1>
          <p>
            <Link to="/Registry">Registro</Link>
          </p>
          <p>
            <Link to="/Home">Salão</Link>
          </p>
          <p>
            <Link to="/Kitchen">Cozinha</Link>
          </p>
          <form>

          <label htmlFor='email' className='email'></label>
          <input  type='email'  placeholder='Email' value={emailLogin} onChange={event => setEmail(event.target.value)}/>

          <label htmlFor='password' className='password'></label>
          <input  type='password'  placeholder='Senha' value={passwordLogin} onChange={event => setPassword(event.target.value)}/>

          <button className='submitButton' type='submit' onClick={(event) => {
            event.preventDefault();
            fetchLogin();
            alert('entreiiiiii')
            
          }}>Entrar</button>
        </form>
          
      </div>
    );
  }
  
  export default Login;