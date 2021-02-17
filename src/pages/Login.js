import '../style/Login.css';
import '../style/App.css'
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../images/logo.png';


function Login() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const waiter = () => {
    history.push('/waiter');
}
const kitchen = () => {
    history.push('/kitchen');
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="" className="logo" id="logoLogin" />
        <form className="formLogin">
          <input type="text" id="email" placeholder="email@email.com" value={email} onChange={(event) => setEmail(event.target.value)} />
          <input type="password" id="pass" placeholder="******" value={password} onChange={(event) => setPassword(event.target.value)} />
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
                if (json.role === 'garçom') {
                  waiter()
                }
                else if (json.role === 'cozinha') {
                  kitchen()
                }

                setEmail('');
                setPassword('');

              })

          }} > ENTRAR</button>
        </form>
        <p className="pRegister">Funcionário novo?  <Link to="/signUp" >Cadastre-se! </Link></p>
      </header>
    </div>
  );
}

export default Login;