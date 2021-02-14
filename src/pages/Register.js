import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [role, setRole ] = useState('')
  
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
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"email": email,
                              "password":password,
                              "role":role,
                              "restaurant":"Burger Nota 1000",
                              "name":name});
    

    var requestOptions = {
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

    
return(
    <div>
        <header>
            <h1>Página de Registro</h1>
        </header>
        <form>
          <input 
            type='text'
            name='name' 
            placeholder='Nome'  
            onChange={handleName} 
            value={name} 
            required
            /> 
          <input 
            type='text' 
            name='email' 
            placeholder='E-mail' 
            value={email} 
            onChange={handleEmail}  
            required
            />
          <input
           type='password' 
           name='password' 
           placeholder='Senha' 
           value={password} 
           onChange={handlePassword} 
           required
           />
          <div>
            Local de Trabalho
            <label>
                <input 
                type='radio' 
                name='role' 
                value='kitchen' 
                onChange={handleRole} 
                checked={role === 'kitchen'}
                 />
              Cozinha
            </label>
            <label>
                <input 
                  type='radio' 
                  name='role' 
                  value='lounge' 
                  onChange={handleRole} 
                  checked={role === 'lounge'} 
                  />
                Salão
            </label>
          </div>
          <button type='submit' onClick={handleSubmit}>Enviar</button>
        </form>
        <p>            
            <Link to="/">Home</Link>
        </p>
    </div>
    )
};