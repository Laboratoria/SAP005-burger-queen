import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [role, setRole] = useState("");
  // const role = setRole();

  // const routerLogin = () => {
  //   history.push("/");
  // }
  const routerKitchen = () => {
    history.push("/kitchen");
  };

  const routerHall = () => {
    history.push("/hall");
  };

  const handleClick = (event) => {
    event.preventDefault();

    fetch("https://lab-api-bq.herokuapp.com/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.role === "hall") {
          routerHall();
        }
        if (json.role === "kitchen") {
          routerKitchen();
        }
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form className="login" onSubmit={handleClick}>
        <label htmlFor="email">Email:</label>
        <input
          className="login"
          type="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <p />
        <label htmlFor="passowrd">Senha: </label>
        <input
          className="login"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <p />

        <label htmlFor="login">Login:</label>
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