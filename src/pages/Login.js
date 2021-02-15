import '../style/login.css'
import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import ErrorModal from '../components/ModalError';

function Login(props) {
    const [authInfo, setAuthInfo] = useState(props.authInfo);
    let history = useHistory();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const requestOptions = {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(authInfo)
      };
  
      fetch('https://lab-api-bq.herokuapp.com/auth', requestOptions)
        .then(response => response.json())
        .then(data => {
          if(data.token !== undefined){
            localStorage.setItem("token", data.token);
            localStorage.setItem("userId", data.id);
            localStorage.setItem("atendente", data.name)
            history.push({
              pathname: `/${data.role}`,
            });
          } else {
            setIsModalVisible(true)
            setErrorMessage(`${data.message}`)
          }
        })
      }

      return (
        <div>
        {isModalVisible ? (<ErrorModal onClose={() => setIsModalVisible(false)}>{errorMessage}</ErrorModal>) : null}
          <section className="login">
            <Logo />
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
        <Footer />
      </div>
      
    );
}

export default Login;