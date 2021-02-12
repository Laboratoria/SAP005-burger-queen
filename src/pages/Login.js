import '../style/login.css'
import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import Logo from '../images/Logo.png'

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
          if(data.token !== undefined){
            history.push(`/${data.role}`);
          } else {
            alert(data.message);
          }
        })
    }

    return (
      <div>
        <section className="login">
            <img className="logo" src={Logo} />
            <form className="form-login" onSubmit={handleSubmit}>
            <input 
                className="form-input"
                type="text" 
                placeholder="E-mail"
                onChange={(event) => setAuthInfo({ ...authInfo, "email": event.target.value })} 
            />
    
            <input
                className="form-input"
                type="password" 
                placeholder="Senha"
                onChange={(event) => setAuthInfo({ ...authInfo, "password": event.target.value })} 
            />
    
            <button
                className="form-button" 
                type="submit" 
                value="Submit"
            >
                ENTRAR
            </button>
    
            <p className="form-text">
                Não tem uma conta? 
                <Link className="form-router" to="/register" alt="Página Registro">Registre-se!</Link>
            </p>
            </form>
        </section>
        <footer>
            <p className="footer-text">Projeto desenvolvido por
            <a className="footer-link" href="" alt="Ana Clara GitHub"> Ana Clara</a> e
            <a className="footer-link" href="" alt="Kauana GitHub"> Kauana </a> 
            durante o Bootcamp da
            <a className="footer-link" href="" alt="Site Laboratória"> Laboratória</a>
            .</p>
        </footer>
      </div>
      
    );
}

// export function isAuthenticated() {
//   if(token !== ""){
//     return true;
//   }

//   return false;
// }

export default Login;