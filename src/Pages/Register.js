// import logo from "./logo.svg";
// import "./App.css";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";


function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [name, setName] = useState("");
  const history = useHistory();

  function saloonPage() {
    history.push("/saloon");
  }

  function kitchenPage() {
    history.push("/kitchen");
  }

  function registerUser(email, password, role, restaurant, name) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("email", `${email}`);
    urlencoded.append("password", `${password}`);
    urlencoded.append("role", `${role}`);
    urlencoded.append("restaurant", `${restaurant}`);
    urlencoded.append("name", `${name}`);

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow"
  };

  fetch("https://lab-api-bq.herokuapp.com/users", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result);
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
    registerUser (email, password, role, restaurant, name)
  }

  return (
    <div className="register-page">
      <form className="register-form">
        <center>
          <h3>Cadastro</h3>

          <div className="form-group">
            <label>
              E-mail
            <input type="email" className="form-control" placeholder="exemplo@email.com" value={email} onChange={(event) => setEmail(event.target.value)} />
            </label>
          </div>

          <div className="form-group">
            <label>
              Senha:
              <input type="password" className="form-control" placeholder="mínimo 6 caracteres" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>
          </div>

          <div className="form-group">
            <label>
              Área de Trabalho:
              <input type="radio" className="radio" name="role" value="waiter" onChange={(event) => setRole(event.target.value)} />Salão
              <input type="radio" className="radio" name="role" value="chef" onChange={(event) => setRole(event.target.value)} />Cozinha
            </label>
          </div>

          <div className="form-group">
            <label>
              Restaurante:
              <input type="text" className="form-control" placeholder="nome do restaurante" value={restaurant} onChange={(event) => setRestaurant(event.target.value)} />
            </label>
          </div>

          <div className="form-group">
            <label>
              Nome:
              <input type="text" className="form-control" placeholder="nome do funcionário" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
          </div>

          <label>
            <input type="submit" className="btn btn-dark btn-lg btn-block" value="Enviar" onClick={(event) => handleSubmit(event)} />
          </label>
          <p>
            Já tem conta? <Link to="/">Entrar!</Link>
          </p>
        </center>
      </form>
    </div>
  )
}

export default Register;
