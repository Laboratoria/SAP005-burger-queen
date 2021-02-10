import React from 'react';
import Logo from './logo.png';
import './App.css';
import {useHistory} from 'react-router-dom'


function App() {
  const history = useHistory()

  const routerRegister=()=>{
    history.push('/cadastro')
  }
  const routerLogin=()=>{
    history.push('/login')
  }
  return (
    <div className="AppInit">
      <img src={Logo} className="logo" alt="logo Burger Hunger"/>
      <nav className="nav">
        <button className="btnCad" onClick={routerLogin}>Login</button>
        <button className="btnCad" onClick={routerRegister}>Cadastrar</button>        
        
      </nav>
    </div>
  );

 
}
export default App;
