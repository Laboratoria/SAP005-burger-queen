// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


function Register() {

  const history = useHistory();

  function saloonPage() {
    history.push('/saloon');
  }

  function kitchenPage() {
    history.push('/kitchen');
  }

  function registerUser(email, password, role, restaurant, nome) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    let urlencoded = new URLSearchParams();
    urlencoded.append("email", `${email}`);
    urlencoded.append("password", `${password}`);
    urlencoded.append("role", `${role}`);
    urlencoded.append("restaurant", `${restaurant}`);
    urlencoded.append("name", `${nome}`);

    const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  fetch("https://lab-api-bq.herokuapp.com/users", requestOptions)
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
  const [role, setRole] = useState('');
  const [restaurant, setRestaurant] = useState('');
  const [nome, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser (email, password, role, restaurant, nome)
  }

  return (
  <div className= "img-fundo-two">
    <form>
      <center>
      <h3>Register</h3>

      <div className="form-group">
        <label>
          Email:
        <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
      </div>

      <div className="form-group">
        <label>
          Password:
          <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
      </div>

      <div className="form-group">
        <label>
          Role:
          <input type="text" className="form-control" placeholder="waiter ou chef" value={role} onChange={(event) => setRole(event.target.value)} />
        </label>
      </div>

      <div className="form-group">
        <label>
          Restaurant:
          <input type="text" className="form-control" placeholder="Restaurant" value={restaurant} onChange={(event) => setRestaurant(event.target.value)} />
        </label>
      </div>

      <div className="form-group">
        <label>
          Name:
          <input type="text" className="form-control"  placeholder="Primeiro Nome" value={nome} onChange={(event) => setName(event.target.value)} />
        </label>
      </div>
      <label>
      <input type="submit" className="btn btn-dark btn-lg btn-block" value="Enviar" onClick={(event) => handleSubmit(event)}/>
      <p className="forgot-password text-right">
        Já tem conta? <Link to='/'>Entrar!</Link>
      </p>
      </label>
      </center>
    </form>
  </div>
  )
  
}

export default Register;