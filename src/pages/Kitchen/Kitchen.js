import React from 'react';
import './Kitchen.css';

function Kitchen() {
  const token = localStorage.getItem("token")
  const id = localStorage.getItem("id")
  console.log(token,id)
  return (
    <div className="Cozinha">
      <h1 className="CozinhaTitle">Página cozinha</h1>
    </div>
  );
}
export default Kitchen;