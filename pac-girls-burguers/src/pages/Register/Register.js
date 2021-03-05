import React, { useState } from "react";

import {
  Button,
  Input,
  Select,
  Container,
  Logo,
  Title,
  Option
} from "./register-styled";
import { Link, useHistory } from "react-router-dom";
import api from "../../api";

const Register = () => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRole = (e) => {
    setRole(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  async function handleButton(e) {
    e.preventDefault();
    const data = await api.register(email, password, role, name);
    if (email === "" && password === "" && role === "" && name === "") {
      alert("Por favor, preencha todos os campos");
    } else {
      alert("Usuário cadastrado com sucesso");

      history.push("/login");
    }

    console.log(data);
  }

  return (
    <Container>
      <Logo src="/assets/logo-pac.png" />
      <Title>CADASTRO</Title>

      <Input
        type="text"
        value={name}
        onChange={handleName}
        placeholder="Digite seu Nome"
        required
      />
      <br />
      <Input
        type="email"
        value={email}
        onChange={handleEmail}
        placeholder="Digite um Email"
        required
      />
      <br />
      <Select value={role} onChange={handleRole} required>
        <Option disabled value={""}>
          Selecione seu cargo
        </Option>
        <Option value={"cozinha"}>Cozinha/Chefe</Option>
        <Option value={"salao"}>Salão/Garçon</Option>
      </Select>
      <br />
      <Input
        type="password"
        value={password}
        onChange={handlePassword}
        placeholder="Digite uma Senha"
        required
      />
      <br />
      <Button type="submit" onClick={handleButton}>
        Cadastrar
      </Button>

      <p>
        Já tem cadastro: <Link to="/login">Entre aqui</Link>
      </p>
    </Container>
  );
};

export default Register;