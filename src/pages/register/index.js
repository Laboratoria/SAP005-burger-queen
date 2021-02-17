import React, { useState } from "react";
import "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleForm = (event) => {
    event.preventDefault();
  };

  fetch("https://lab-api-bq.herokuapp.com/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      accept: "application/json",
    },
    body: `email=${email}&password=${password}&role=${role}&restaurant=Botin Burger=${name}`,
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setName("");
      setEmail("");
      setPassword("");
      setRole("");
    });

  return (
    <div>
      <h1>Cadastro</h1>

      <form class="login" onSubmit={handleForm}>
        <input
          class="login"
          id="name"
          type="text"
          placeholder="Nome Completo"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <input
          class="login"
          id="email"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <input
          class="login"
          id="password"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button type="submit" class="button" id="button">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Register;
