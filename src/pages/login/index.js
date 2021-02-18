import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const routerLogin = () => {
    history.push("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  fetch("https://lab-api-bq.herokuapp.com/users", {
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
      routerLogin();
    });


  return (
    <div>
      <h1>Login</h1>
      <form class="login" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="E-mail "
          value={email}
          onChange={(event) => setEmail(event.target.value)}
           
        />
        <input
           class="login"
          type="password"
          placeholder=" Senha de no mínimo 6 caracteres"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        
          />
         
        <button type="onClick" class="button" id="button">
          Entrar
        </button>
          Não tem uma conta?
          <Link to="/Register">Cadastrar</Link>

      </form>
    </div>
  );
}
export default Login;
