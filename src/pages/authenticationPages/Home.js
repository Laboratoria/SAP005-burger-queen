
import React from 'react';
import './Auth.css';
import {useHistory} from 'react-router-dom'
import { StandardButtonPrincipal2, StandardButtonPrincipal }  from '../../components/StandardButton/buttonRegister';
import { LogoHome } from '../../components/Logos/Logos.js';




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
    <LogoHome/>
    </article>
    <aside class="_1oez8w8">
      <section class="_1ytio68">
        <StandardButtonPrincipal content="Login" onClick={routerLogin}/>
        <StandardButtonPrincipal2 content="Cadastrar" onClick={routerRegister}/>
      </section>
    </aside>
  </main>
  );
 
}
export default Home;
