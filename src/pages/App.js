import './App.css';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from './logo.png';

function App() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const routerKitchen = () => {
    history.push('/kitchen');
  }

  const routerWaiter = () => {
    history.push('/waiter');
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="" className="logo" id="logoLogin" />
        <form className="formLogin">
          <input type="text" id="email" placeholder="Digite seu e-mail" value={email} onChange={(event) => setEmail(event.target.value)} />
          <input type="text" id="pass" placeholder="Digite sua senha" value={password} onChange={(event) => setPassword(event.target.value)} />
          <button id="login" onClick={(e) => {
            console.log(email, password)

            e.preventDefault();

            fetch("https://lab-api-bq.herokuapp.com/auth", {
              method: 'POST',
              headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email,
                password,
              })
            })
              .then((response) => response.json())
              .then((json) => {
                console.log(json);
                if (json.role === "Garçom") {
                  routerWaiter();

                } else if (json.role === "Cozinha") {
                  routerKitchen();
                } else {

                }

                setEmail('');
                setPassword('');

              })

          }} > ENTRAR</button>
        </form>
        <p className="pRegister">Funcionário novo?  <Link to="/singnUp" >Cadastre-se! </Link></p>
      </header>
    </div>
  );
}

export default App;