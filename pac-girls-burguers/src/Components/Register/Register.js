import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 400px;
  height: 30px;
  font-size: 16px;
  padding: 10px;
  border: 1 px solid #000;
  border-radius: 10px;
  margin: 20px;
`;

const Button = styled.button`
  background-color: red;
  color: white;
  width: 300px;
  height: 30px;
  font-size: 16px;

  border: 1 px solid #000;
  border-radius: 10px;
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePosition = (e) => {
    setPosition(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleButton = () => {
    alert(email + " - " + password + " - " + name + " - " + position);
  };

  return (
    <div>
      <Input
        type="text"
        value={name}
        onChange={handleName}
        placeholder="Digite seu Nome"
      />
      <br />
      <Input
        type="email"
        value={email}
        onChange={handleEmail}
        placeholder="Digite um Email"
      />
      <br />
      <Input
        type="text"
        value={position}
        onChange={handlePosition}
        placeholder="Cozinha ou Salão"
      />
      <br />
      <Input
        type="password"
        value={password}
        onChange={handlePassword}
        placeholder="Digite uma Senha"
      />
      <br />
      <Button type="submit" onClick={handleButton}>Cadastrar</Button>
    </div>
  );
};

export default Register;
