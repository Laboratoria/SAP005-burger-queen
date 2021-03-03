import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../api";
import { Button, Container, Input, Logo, Title } from "./login-styled";

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
      const data = await api.login(email, password);
      localStorage.setItem("token", data.token);
      if (data.role === "cozinha") {
        history.push("/kitchen");
      } else if (data.role === "salao") {
        history.push("/saloon");
      }
      localStorage.setItem("user", JSON.stringify(data));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <Logo src="/assets/logo-pac.png" />
      <Title>ENTRAR</Title>
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
        Ainda não tem conta: <Link to="/register">registre-se</Link>
      </p>
      <br />
      <Button type="submit" onClick={handleButton}>
        Entrar
      </Button>
    </Container>
  );
};

export default Login;
