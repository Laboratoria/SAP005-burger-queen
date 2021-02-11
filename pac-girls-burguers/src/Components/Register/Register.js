import React, { useState } from "react";
import { Button } from "../Login/login-styled";
import { Input } from "./register-styled";
import {useHistory } from "react-router-dom"

const Register = () => {
  let history = useHistory()

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

  const handleButton = () => {
    fetch("https://lab-api-bq.herokuapp.com/users/", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `email=${email}&password=${password}&role=${role}&restaurant=PacBurguer&name=${name}`,
    }).then((response) => response.json())
      .then((json) => {
        console.log(json)})
      .catch((error) => {
        console.log(error);
      });

      history.replace("/")
  };

  return (
    <div>
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
      <Input
        type="text"
        value={role}
        onChange={handleRole}
        placeholder="Cozinha ou Salão"
        required
      />
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
    </div>
  );
};

export default Register;
