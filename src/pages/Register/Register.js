import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logoburger from '../../img/logoburger.png';
import './Register.css'

export const Register = () => {

  const route = useHistory();

  const loginRoute = () => {
    route.push('/')
  }

  const loungeRoute = () => {
    route.push('/Lounge')
  }

  const kitchenRoute = () => {
    route.push('/Kitchen')
  }

  function BackBtn(event) {
    event.preventDefault();
    loginRoute();
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  const handleName = (event) => {
    setName(event.target.value);
  }
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleRole = (event) => {
    setRole(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "email": email,
      "password": password,
      "role": role,
      "restaurant": "Burger Nota 1000",
      "name": name
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://lab-api-bq.herokuapp.com/users", requestOptions)
      .then(response => response.json())
      .then(result => {
        if(result.role === "lounge") {
          loungeRoute();
        }
        if(result.role === "kitchen") {
          kitchenRoute();
      }
       })
      .catch(error => alert('error', error));
  }
  


  return (
    <div className="container-register">
      <header>
        <img src={logoburger} className="logoburger" alt="logoburger" />
        <h1 className="h1-register">Crie seu cadastro</h1>
      </header>
      <form>
        <div className="Register">
          <input
            type='text'
            name='name'
            placeholder='Seu nome'
            onChange={handleName}
            value={name}
            required
          />
        </div>
        <div>
          <input
            type='email'
            aria-describedby="emailHelp"
            name='email'
            placeholder='E-mail'
            value={email}
            onChange={handleEmail}
            required
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div>
          <input
            type='password'
            name='password'
            placeholder='Senha'
            value={password}
            onChange={handlePassword}
            required
          />
        </div>
        <div>
          <label className="label">Local de Trabalho</label>
          <div className="form-check">
            <input className="form-check-input"
              type="radio"
              name="role"
              id="flexRadioDefault1"
              value='kitchen'
              onChange={handleRole}
              checked={role === 'kitchen'} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Cozinha
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input"
              type="radio"
              name="role"
              id="flexRadioDefault2"
              value='lounge'
              onChange={handleRole}
              checked={role === 'lounge'} />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Salão
              </label>
          </div>
        </div>
        <div>
          <button className="back-btn" onClick={BackBtn}>Voltar</ button>
          <button className='register-btn' type='submit' onClick={handleSubmit}>Cadastrar</button>
        </div>
      </form>
    </div>
  )
};