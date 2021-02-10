import React from 'react';
import { Link } from 'react-router-dom';

function Login () {
    return (
      <div className="Login">
        <header className="Login-header">
          <p>Você está na pagina de login</p>
          <p>
              <Link to="/register">Ir para pagina Registro</Link>
          </p>
        </header>
      </div>
    );
};

export default Login;