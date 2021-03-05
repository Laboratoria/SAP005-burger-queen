import '../style/SingUp.css';
import '../style/App.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import logo from '../images/logo.png';
import panela from '../images/panela.png';
import hand from '../images/hand.png';

function SignUp() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  //const [confirme, setConfirme] = useState(true)

  const history = useHistory()
  const rLogin = () => {
    history.push('/')
  }
  return (
    <div className="signUp">
      <header className="signUp-header">
        <img src={logo} alt="" className="logoS" />
      </header>  
      <section className="formSig">
        <div className="divRegister">
          <div>
            <label className="role">
              <img src={panela} alt="" className="logop" />
              <input
                type="radio"
                value="Cozinha"
                checked={role === "Cozinha"}
                onChange={() => setRole("Cozinha")}
              />
            </label>
            <label className="role">
              <img src={hand} alt="" className="logoh" />
              <input
                type="radio"
                value="Garçom"
                checked={role === "Garçom"}
                onChange={() => setRole("Garçom")}
              />
            </label>
          </div>
          <form className="form">
            <input type="text" id="name" placeholder="Digite seu nome" value={name} onChange={(event) => setName(event.target.value)} />
            <input type="text" id="email" placeholder="Digite seu e-mail" value={email} onChange={(event) => setEmail(event.target.value)} />
            <input type="password" id="password" placeholder="Crie uma senha" value={password} onChange={(event) => setPassword(event.target.value)} />
            <button id="signupBtn" onClick={((e) => {
              console.log(name, email, password, role)

              e.preventDefault();

              fetch("https://lab-api-bq.herokuapp.com/users/", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'accept': 'application/json'
                },
                body: `email=${email}&password=${password}&role=${role}&restaurant=Chef'sBurger&name=${name}`
              })
                .then((response) => response.json())
                .then((json) => {
                  console.log(json);
                  setName('');
                  setEmail('');
                  setPassword('');
                  setRole('');
                  //setConfirme('');
                })
                alert ("Usuário cadastrado com sucesso!");
              rLogin();
            })} >CADASTRAR</button>
            
          </form>
        </div>
        </section>
    </div>
  );
}


export default SignUp;
