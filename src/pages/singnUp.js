import './App.css';
import React, { useState } from 'react';
import logo from './logo.png';
import panela from './panela.png';
import hand from './hand.png';

function SingnUp() {
  const [email , setEmail]= useState('');
  const [name , setName]= useState('');
  const [password , setPassword]= useState('');
  const [role, setRole]= useState('');

    return (
      <div className="singnUp">
        <header className="singnUp-header">
        <img src= {logo} alt="" className="logo"/>
        <div className="role">
        <label>
        <img src= {panela} alt="" className="logop"/>
            <input
              type="radio"
              value="Cozinha"
              checked={role === "Cozinha"}
              onChange={() => setRole("Cozinha")}
            />
          </label>
          <label className="waiter">
          <img src= {hand} alt="" className="logoh"/>
            <input
              type="radio"
              value="Garçom"
              checked={role === "Garçom"}
              onChange={() => setRole("Garçom")}
            />
          </label>
          </div>
        <form className="form">
        <input type="text" id="email" placeholder="Digite seu e-mail" value={email} onChange={(event) => setEmail(event.target.value)} />
        <input type="text" id="name" placeholder="Digite seu nome" value={name}  onChange={(event) => setName(event.target.value)}/>
        <input type="text" id="password" placeholder="Digite sua senha" value={password} onChange={(event) => setPassword(event.target.value)}/>
        <button id="singnupBtn" onClick={(e) => {

          e.preventDefault();

          fetch("https://lab-api-bq.herokuapp.com/users", {
            method: 'POST',
            header:{
              'Content-Type': 'application/json',
              'accept': 'application/json'
            },
            body: JSON.stringify({ email, role, password, name, restaurant: "Chef'sBurguer" })
          })
            .then((response) => response.json())
            .then((json) => {
              console.log(json);
              setName('');
              setEmail('');
              setPassword('');
              setRole('');
            })
        }} >CADASTRAR</button>
    </form>
    </header>
    </div>
    );
  }

  
  export default SingnUp;
