import React from "react";
import { useHistory } from "react-router-dom";


function Kitchen() {

  const token = localStorage.getItem("token");
  const history = useHistory();

  function logout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <div className="kitchen-page">
      <h1>Cozinha</h1>
      <button onClick={(event) => logout(event)}>Sair</button>
    </div>
  )
}

export default Kitchen;
