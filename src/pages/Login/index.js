import React, { useState } from 'react'
import { Link, useHistory} from 'react-router-dom';

function Login(){
  const [emailLogin, setEmail] = useState('');
  const [passwordLogin, setPassword] = useState('');
  const urlLogin = `email=${emailLogin}&password=${passwordLogin}`
  const history = useHistory();

  const routerHall = () => {
    history.push('/Hall')
  }

  const routerKitchen = () => {
    history.push('/Kitchen')
  }


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
      .then((json) => {
        console.log(json.role)
        if(json.role === "garcom"){
          routerHall();
        }
        else if(json.role === "cozinha"){
          routerKitchen();
        }
        else{
          alert(json.message)
        }
      })
  }

    return (
      <div>
          <h1>Login</h1>
          <p>
            <Link to="/Registry">Registro</Link>
          </p>

        <form>

          <label htmlFor='email' className='email'></label>
          <input  type='email' autoComplete='username'  placeholder='Email' value={emailLogin} onChange={event => setEmail(event.target.value)}/>

          <label htmlFor='password' className='password'></label>
          <input  type='password'   autoComplete='password' placeholder='Senha' value={passwordLogin} onChange={event => setPassword(event.target.value)}/>

          <button className='submitButton' type='submit' onClick={(event) => {
            event.preventDefault();
            fetchLogin();
            
          }}>Entrar</button>

        </form>
          
      </div>
    );
  }
  
  export default Login;