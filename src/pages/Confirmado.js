import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import './Confirmado.css';

function Confirmado() {

  const history = useHistory()

  const routerConfirm = () => {
    history.push('/login')
  }

  return (
    <div className="Confirmado">
      <h1>Usuário criado com sucesso!</h1>
      <h1>Faça o login:</h1>
      <button className="cadBtn" onClick={routerConfirm}>Login</button>
    </div>
  );
}

export default Confirmado;