import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Register.css'

export const Register = () => {
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
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "email": email,
      "password": password,
      "role": role,
      "restaurant": "Burger Nota 1000",
      "name": name
    });


    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://lab-api-bq.herokuapp.com/users", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  };


  return (

    <div className="container">
      <header>
        <h1>Registre-se</h1>
      </header>
      <form>
        <div className="mb-3">
          <label for="exampleInputName1" className="form-label">Nome</label>
          <input
            type='text'
            className="form-control"
            name='name'
            placeholder='Seu nome aqui'
            onChange={handleName}
            value={name}
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email</label>
          <input
            type='email'
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name='email'
            placeholder='E-mail'
            value={email}
            onChange={handleEmail}
            required
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Senha</label>
          <input
            type='password'
            className="form-control"
            id="exampleInputPassword1"
            name='password'
            placeholder='Senha'
            value={password}
            onChange={handlePassword}
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputRole1" className="form-label">Local de Trabalho</label>  
        <div className="form-check">
             
          <input className="form-check-input" 
            type="radio" 
            name="role" 
            id="flexRadioDefault1" 
            value='kitchen'
            onChange={handleRole}
            checked={role === 'kitchen'}/>
            <label className="form-check-label" for="flexRadioDefault1">
              Cozinha
            </label>
            </div>
        <div class="form-check">        
            <input className="form-check-input" 
              type="radio" 
              name="role" 
              id="flexRadioDefault2"
              value='lounge'
              onChange={handleRole}
              checked={role === 'lounge'}/>               
              <label className="form-check-label" for="flexRadioDefault2">
                Salão
              </label>
        </div>
        </div>

            
            <button className='btn btn-danger' type='submit' onClick={handleSubmit}>Cadastrar</button>
            
        </form>
          {/* <p>            
              <Link to="/">Home</Link>
          </p> */}
        </div>
          
  )
};