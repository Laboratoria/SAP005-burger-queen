import { React, useState } from "react";
import './login.css';
import { Link } from 'react-router-dom';
import { MdEmail, MdLock, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import Footer from '../../components/Footer';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  function login(event) {
    event.preventDefault();
    fetch("https://lab-api-bq.herokuapp.com/auth/", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `email=${email}&password=${password}`,
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <>    
    <div className="login">
      <div className="login-logo">
        <img src="img/logotipo.png" alt="logo-app" />
      </div>
      <div className="login-right">
        <div className="loginInputEmail">
          <MdEmail />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="loginInputPassword">
          <MdLock />
          <input
            type={show ? "text" : "password"}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="registe-eye">
            {show ? (
              <MdVisibility size={20} onClick={handleClick} />
            ) : (
              <MdVisibilityOff size={20} onClick={handleClick} />
            )}
          </div>
        </div>
        <button type="submit" onClick={login}>
          Entrar
        </button>
        <h4>Não tem uma conta?<Link to="./register/index.js"><strong> Cadastra-se.</strong></Link></h4>
      </div>
	  <div className="login-footer">
		
	  </div>
	   
    </div>
    <Footer />
    </>
  );
};

export default Login;
