import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (event) => {
    event.preventDefault();
  };

  fetch("https://lab-api-bq.herokuapp.com/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      accept: "application/json",
    },
    body: `email=${email}&password=${password}`,
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setEmail("");
      setPassword("");
    });

  return (
    <div>
      <h1>Login</h1>
      <form class="login" onSubmit={handleForm}>
        <input
          class="login"
          id="email"
          type="temail"
          placeholder="E-mail "
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          class="login"
          id="password"
          type="password"
          placeholder=" Senha de no mínimo 6 caracteres"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        ></input>
        <button type="submit" class="button" id="button-register">
          Entrar
        </button>
        <p>Por Favor marque o seu setor:</p>
        <input type="radio" id="kitchen" name="Kitchen" value="kitchen"></input>
        <label for="kitchen">kitchen</label>
        <input type="radio" id="hall" name="Hall" value="Hall"></input>
        <label for="hall">Hall</label>
        <p>
          Não tem uma conta?
          <Link to="/Register">Cadastrar</Link>
        </p>
      </form>
    </div>
  );
}
export default Login;
