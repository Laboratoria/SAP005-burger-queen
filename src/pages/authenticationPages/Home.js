
import React from 'react';
import Logo from './img/logo.png';
import './Home.css';
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

        <button className="btnCad" onClick={routerLogin}><h2>Login</h2></button>
        <button className="btnCad" onClick={routerRegister}><h2>Cadastrar</h2></button>
      </section>
    </aside>
  </main>
  );
 
}
export default Home;
