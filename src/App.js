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
    <main class="_cjo0m2">
    <article class="_hjfkep">
      <img src={Logo} className="logo" alt="logo Hello Word" />
    </article>
    <aside class="_1oez8w8">
      <section class="_1ytio68">
        <button className="btnCad" onClick={routerLogin}>Login</button>
        <button className="btnCad" onClick={routerRegister}>Cadastrar</button>
      </section>
    </aside>
  </main>
  );

 
}
export default App;
