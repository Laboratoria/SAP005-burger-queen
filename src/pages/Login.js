import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';

function Login(props) {
    const [authInfo, setAuthInfo] = useState(props.authInfo);
    let history = useHistory();
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(authInfo)
      };
  
      fetch('https://lab-api-bq.herokuapp.com/auth', requestOptions)
        .then(response => response.json())
        .then(data => {
          history.push(`/${data.role}`);
        })
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="E-mail"
            onChange={(event) => setAuthInfo({ ...authInfo, "email": event.target.value })} 
          />
  
          <input 
            type="password" 
            placeholder="Senha"
            onChange={(event) => setAuthInfo({ ...authInfo, "password": event.target.value })} 
          />
          
          <button 
            type="submit" 
            value="Submit"
          >
            ENTRAR
          </button>
  
          <p>
            Não tem uma conta? 
            <Link to="/register">Registre-se!</Link>
          </p>
        </form>
      </div>
    );
}

export function isAuthenticated() {
  if(token !== ""){
    return true;
  }

  return false;
}

export default Login;