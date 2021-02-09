import React from 'react';
import Logo from './logo.png';
import './App.css';

function App() {

  return (
    <div className="App">
      <img src={Logo}  className="logo"/>
      <nav className="nav">
        <button className="btnCad">Cadastro</button>
      </nav>
    </div>
  );
}

export default App;
