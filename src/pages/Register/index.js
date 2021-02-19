import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import './Register.css';


export const Register = () => {
    const [signIn, registrationData] = useState({'restaurant': 'burger game'});
    const direcion = useHistory();

    const directMenu = () => {
    direcion.push('/menu')
    }
  
    const directKitchen = () => {
      direcion.push('/kitchen')
    }
    const sendRegistration = (e) => {
        e.preventDefault();
        fetch('https://lab-api-bq.herokuapp.com/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(signIn)
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
        if(data.role === "waiter"){
            directMenu();
          }
          else if(data.role === "cooker"){
            directKitchen();
          }
        })
    }

    return (
        <>
        <section className="login">
      <form onSubmit={sendRegistration} className="register-form">
        <h2>Cadastre-se</h2>
        <input type='text' className='inputfr' placeholder='Nome do usuario' onChange={(e) => registrationData({...signIn, 'name' : e.target.value})} />
        <input type='text' className='inputfr' placeholder='Insira seu e-mail' onChange={(e) => registrationData({...signIn, 'email' : e.target.value})} />
        <p>Cozinheiro</p>
        <input className='inputsetvalue' value='cooker' type="radio" name='role' onChange={(e) => registrationData({...signIn, 'role' : e.target.value})} />
        <p>Garçom/Garçonete</p>
        <input className='inputsetvalue' value='waiter' type="radio" name='role' onChange={(e) => registrationData({...signIn, 'role' : e.target.value})} />
        <input className='inputfr'type='password' id='password' placeholder='Informe uma senha numerica de 6 digitos' onChange={(e) => registrationData({...signIn, 'password' : e.target.value})} />
        <button className='button-logi' id='btn-submit' type='submit' value='submit'>Cadastrar</button>
        <p>Se já for cadastrado: <Link to='/'>Login</Link></p> 
        </form>
        </section>
        
    </>
    );
};