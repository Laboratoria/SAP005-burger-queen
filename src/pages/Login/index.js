import React from 'react'
import { Link } from 'react-router-dom';

function Login(){
    return (
      <div>
          <h1>Login</h1>
          <p>
            <Link to="/Registry">Registro</Link>
          </p>
          <p>
            <Link to="/Home">Salão</Link>
          </p>
          <p>
            <Link to="/Kitchen">Cozinha</Link>
          </p>
      </div>
    );
  }
  
  export default Login;