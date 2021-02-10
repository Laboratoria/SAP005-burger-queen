import React from 'react';
import { Link } from 'react-router-dom';

function Register () {
    return (
      <div className="Register">
        <header className="Register-header">
          <p>Você está na pagina de registro</p>
          <p>
              <Link to="/login">Ir para pagina Login</Link>
          </p>
        </header>
      </div>
    );
};

export default Register;