import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>ESSA É A LOGIN</h1>
      <p>
        <Link to="/Register"> VOLTE PARA O REGISTER</Link>
      </p>
    </div>
  );
};

export { Login };
