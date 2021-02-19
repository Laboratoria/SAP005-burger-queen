import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const routerLogin = () => {
    history.push("/Hall");
  };

  const handleClick = (event) => {
    event.preventDefault();

    fetch("https://lab-api-bq.herokuapp.com/auth", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
        
      },
      body: JSON.stringify({email,password})
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        routerLogin();
      });
  
  };


  return (
    <div>
      <h1>Login</h1>
      <form className="login" onSubmit={handleClick}>

        <label htmlFor="email">Email</label>
        <input
          className="login"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="passowrd">Senha </label>
        <input
          className="login"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
          


        <label htmlFor="login">Login</label>
        <button type="submit" id="button" onClick={handleClick}>
          Entrar
         </button>

        <p>Não tem uma conta?</p>
        <Link to="/Register">Cadastrar</Link>
       
      </form>
    </div>
  );
}
export default Login;
