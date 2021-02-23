import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Input } from "./login-styled";
import { Button } from "./login-styled";

const Login = () => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  async function handleButton(e) {
    e.preventDefault();

    try {
      const response = await fetch("https://lab-api-bq.herokuapp.com/auth/", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${email}&password=${password}`,
      });
      const json = await response.json();
      localStorage.setItem("token", json.token);
      if (json.role === "cozinha") {
        localStorage.getItem("token");
        history.push("/cozinha");
      } else if (json.role === "salao") {
        history.push("/cozinha");
        history.push("/salao");
      }
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }
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
      <p>
        Ainda não tem conta: <Link to="/cadastro">registre-se</Link>
      </p>
      <br />
      <Button type="submit" onClick={handleButton}>
        Entrar
      </Button>
    </div>
  );
};

export default Login;
