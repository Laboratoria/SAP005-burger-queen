import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setPassword] = useState('');

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleEmail = (event) => {
      setEmail(event.target.value);
        console.log('email')
      };

    const handlePassword = (event) => {
      setPassword(event.target.value);
      };  

    const handleSubmit = (event) => {
        event.preventDefault();
        setEmail();
        setPassword();

    }
return(
    <div>
        <header>
            <h1>Página de Registro</h1>
        </header>
        <form>
          <input type='text' placeholder='Nome' value={name} onChange={handleName} /> 
          <input type='text' placeholder='E-mail' value={email} onChange={handleEmail} />
          <input type='password' placeholder='Senha' value={senha} onChange={handlePassword} />
          <p>Local de Trabalho</p>
          <p>
          <input type='radio' name='role' value='kitchen'/>
          <label for='kitchen'>Cozinha</label>
          <input type='radio' name='role' value='lounge'/>
          <label for='lounge'>Salão</label>
          </p>
          <button type='submit' onClick={(event) => handleSubmit(event)}>Enviar</button>
          </form>
        <p>
            <Link to="/">Home</Link>
        </p>
    </div>
    )
};