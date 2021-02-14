import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    const { name, value, password, type, checked } = event.target;
    setFormValues({ ...formValues, [name]: value});
  }
    /*const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setPassword] = useState('');*/

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log('*** handleSubmit', data);
  };

    /*const handleName = (event) => {
        setName(event.target.value);
    }

    const handleEmail = (event) => {
      setEmail(event.target.value);
        console.log('email')
      };

    const handlePassword = (event) => {
      setPassword(event.target.value);
      };  

    const handleHole = (event) => {
        setPassword(event.target.value);
        };    

    const handleSubmit = (event) => {
        event.preventDefault();
        setEmail();
        setPassword();

    }*/
return(
    <div>
        <header>
            <h1>Página de Registro</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <input type='text' name='name' placeholder='Nome' onChange={handleInputChange} value={formValues.name || ''} /> 
          <input type='text' name='email' placeholder='E-mail' onChange={handleInputChange} value={formValues.email || ''} />
          <input type='password' name='password' placeholder='Senha' onChange={handleInputChange} value={formValues.password || ''} />
          <div>
            Local de Trabalho
            <label>
                <input type='radio' name='role' value='kitchen' onChange={handleInputChange} checked={formValues.role === 'kitchen'} />Cozinha
            </label>
            <label>
                <input type='radio' name='role' value='lounge' onChange={handleInputChange} checked={formValues.role === 'lounge'} />Salão
            </label>
          </div>
          <button type='submit'>Enviar</button>
        </form>
        <p>            
            <Link to="/">Home</Link>
        </p>
    </div>
    )
};