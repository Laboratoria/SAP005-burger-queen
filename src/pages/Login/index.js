import { React, useState } from "react";
import './login.css';
import { Link, useHistory } from 'react-router-dom';
import { MdEmail, MdLock } from 'react-icons/md';
import Footer from '../../components/Footer/Footer';
import Logo from '../../components/Logo/Logo';

function Login() {
  const history = useHistory()

  const routerHall = () => {
    history.push('/salao')
  }
  const routerKitchen = () => {
    history.push('/cozinha')
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function loginBtn(e) {
    e.preventDefault();
    fetch('https://lab-api-bq.herokuapp.com/auth', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `email=${email}&password=${password}`

    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const token = json.token
        const id = json.id

        const tokenUser = localStorage.setItem("token", token)
        const idUser = localStorage.setItem("id", id)

        if (tokenUser !== null && idUser !== null && json.role === "salao") {
          routerHall();
        } else if (tokenUser !== null && idUser !== null && json.role === "cozinha") {
          routerKitchen();
        } else {
          alert("Funcionário não encontrado!")
        }
      })
  };

  return (
    <>
      <div className="login">
        <Logo />
        <form className="login-right">
          <label className="loginInputEmail" htmlFor="loginInputEmail">
            <MdEmail />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="loginInputPassword" htmlFor="loginInputPassword">
            <MdLock />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit" onClick={loginBtn}>
            Entrar
        </button>
          <h4>Não tem uma conta?<Link to="./Register/index.js"><strong> Cadastre-se.</strong></Link></h4>
        </form>
        <div className="login-footer">

        </div>

      </div>
      <Footer />
    </>
  );
};

export default Login;
