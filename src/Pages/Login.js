import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


function Login() {
  
  const history = useHistory();

  function saloonPage() {
    history.push('/saloon');
  }

  function kitchenPage() {
    history.push('/kitchen');
  }

  function loginAuth(email, password) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    let urlencoded = new URLSearchParams();
    urlencoded.append("email", `${email}`);
    urlencoded.append("password", `${password}`);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  fetch("https://lab-api-bq.herokuapp.com/auth", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      if (result.role === 'waiter') {
        saloonPage();
      }
      if (result.role === 'chef') {
        kitchenPage();
      }
    })
    .catch(error => console.log('error', error));
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    loginAuth (email, password)
    console.log(loginAuth);
  }

  return (
    <form>
      <label>
        Email:
        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        Password:
        <input type="text" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <input type="submit" value="Enviar" onClick={(event) => handleSubmit(event)}/>
      <p>
        Não tem conta? <Link to='/register'>Cadastre-se!</Link>
      </p>
    </form>
  )
  
}

export default Login;
