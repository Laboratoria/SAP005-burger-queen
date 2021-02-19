import React, { useState } from "react";
import { useHistory } from "react-router-dom";

 const Register = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [restaurant] = useState("");

  const routerLogin = () => {
    history.push("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://lab-api-bq.herokuapp.com/users", {
    method: "POST",
    headers: {
       "Content-Type": "application/x-www-form-urlencoded",
      accept: "application/json",
    },
    body: `&email=${email}&password=${password}&role=${role}&Botin Burger=${restaurant}&name=${name}`,
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
     
           routerLogin();
    });
  };

  return (
    <div>
      <h1>Cadastro</h1>

      <form class="login" onSubmit={handleSubmit}>
        <input
          class="login"
          id="name"
          type="text"
          placeholder="Nome Completo"
          value={name}
          onChange={(event) => setName(event.target.value)}
        
        />
        <input
          class="login"
          id="email"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          
        />
        <input
          class="login"
          id="password"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
      
        />

        <p>Por Favor marque o seu setor:</p>
        <input type="radio" id="kitchen" name="radio" value={(role, "kitchen")}
        onClick={(e) => setRole(e.target.value)}/>
         <label for="kitchen">Kitchen</label>

        <input type="radio" id="Hall" name="radio" value={(role, "Hall")}
        onClick={(e) => setRole(e.target.value)}/>
         <label for="Hall">Hall</label>

        <button type="onClick" class="button" id="button">
          Cadastrar
        </button>
      </form>
    </div>
  );
};
export default Register