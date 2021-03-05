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

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const body = {
        email,
        password,
      };
      if (email === "" || password === "") {
        alert("preencha com um email e uma senha");
      } else {
        const data = await api.login(body);
        localStorage.setItem("token", data.token);
        if (data.role === "cozinha") {
          history.push("/kitchen");
        } else if (data.role === "salao") {
          history.push("/saloon");
        }
        localStorage.setItem("user", JSON.stringify(data));
        console.log(data);
      }
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
        Ainda não tem conta: <Link to="/register">Registre-se aqui</Link>
      </p>
      <br />
      <Button type="submit" onClick={handleLogin}>
        Entrar
      </Button>
    </Container>
  );
};

export default Login;
