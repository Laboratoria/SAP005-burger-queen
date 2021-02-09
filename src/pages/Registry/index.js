import React from 'react'
import { Link } from 'react-router-dom';

function Registry() {
    return (
      <div>
          <h1>Criar Conta</h1>
          <p>
          <input type='email' placeholder='email'></input>
          <input type='password' placeholder='Senha'></input>
          <input type='password' placeholder='Confirmar senha'></input>
          <button type='submit'>Criar</button>
            <Link to="/">Voltar</Link>
          </p>
      </div>
    );
  }
  
  export default Registry;