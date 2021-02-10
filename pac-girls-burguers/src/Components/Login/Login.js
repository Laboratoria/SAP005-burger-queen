import React, { useState } from "react";
import { Input } from "./login-styled";
import { Button } from "./login-styled";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleButton = (e) => {
    e.preventDefault();
    fetch("https://lab-api-bq.herokuapp.com/auth/", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `email=${email}&password=${password}`,
    })
      .then((response) => response.json())
      .then((json) => {
        alert("usuário logado com sucesso")
        console.log(json)})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Input
        type="email"
        value={email}
        onChange={handleEmail}
        placeholder="Digite um Email"
      />
      <br />
      <Input
        type="password"
        value={password}
        onChange={handlePassword}
        placeholder="Digite uma Senha"
      />
      <br />
      <Button type="submit" onClick={handleButton}>
        Entrar
      </Button>
    </div>
  );
};

export default Login;
