import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";


function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [token, setToken] = useState("");
  const history = useHistory();

  function saloonPage() {
    history.push("/saloon");
  }

  function kitchenPage() {
    history.push("/kitchen");
  }

  function loginAuth(email, password) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("email", `${email}`);
    urlencoded.append("password", `${password}`);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow"
  };

  fetch("https://lab-api-bq.herokuapp.com/auth", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      localStorage.setItem("token", result.token);
      if (result.role === "waiter") {
        saloonPage();
      }
      if (result.role === "chef") {
        kitchenPage();
      }
    })
    .catch(error => console.log("error", error));
  }

  function handleSubmit (event) {
    event.preventDefault();
    loginAuth (email, password)
    console.log(loginAuth);
  }
  
  return (
    <div className="login-page">
      <form className="login-form">
        <center>
          <h2>CANTINA DA LAB</h2>
          <h3>Login</h3>

          <div className="form-group">
            <label>
              E-mail:
              <input type="email" className="form-control" placeholder="Informar e-mail" value={email} onChange={(event) => setEmail(event.target.value)} />
            </label>
          </div>

          <div className="form-group">
            <label>
              Senha:
              <input type="password" className="form-control" placeholder="Informar senha" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">Lembrar-me</label>
            </div>
          </div>
          <label>
            <input type="submit" className="btn btn-dark btn-lg btn-block" value="Enviar" onClick={(event) => handleSubmit(event)} />
          </label>
          <p>
            Não tem conta? <Link to="/register">Cadastre-se!</Link>
          </p>
        </center>
      </form>
    </div>
  )
}

export default Login;
