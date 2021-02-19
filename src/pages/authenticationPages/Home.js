
import React from 'react';
import Logo from './img/logo.png';
import './Auth.css';
import {useHistory} from 'react-router-dom'



function Home () {
  const history = useHistory()

  const routerRegister=()=>{
    history.push('/Register')
  }
  const routerLogin=()=>{
    history.push('/Login')
  }
  return (
    <main class="_cjo0m2">
    <article class="_hjfkep">
      <img src={Logo} className="logo" alt="logo Hello Burguer" />
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
export default Home;
