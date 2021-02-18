import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import './LoginRegister.css';

function Register() {
  const history = useHistory()

  const routerLogin = () => {
    history.push('/login')
  }

   const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  return (


    <div>
      <h1 className="CadTitle">Cadastro</h1>
      <form className="FormCadastro">
        <label className="cadLabel" htmlFor="cadInputName"></label>
        <input requered type="text" placeholder="Nome do Funcionário" className="cadInput" value={name} onChange={(event) => setName(event.target.value)} />

        <label className="cadLabel" htmlFor="cadInputEmail"></label>
        <input requered type="text" placeholder="E-mail" className="cadInput" value={email} onChange={(event) => setEmail(event.target.value)} />

        <label className="cadLabel" htmlFor="cadInputPassword"></label>
        <input requered type="password" placeholder="Senha" className="cadInput" value={password} onChange={(event) => setPassword(event.target.value)} />

        <label className="cadLabel" htmlFor="cadInputRole">Cargo:</label>

        <div name="ordenar" className="" value={role} onChange={(event) => setRole(event.target.value)}>
        <label for="kitchen" class="radio-label">Cozinha</label>
        <input required="" name="jobPosition" className="cadInputOption" id="kitchen" type="radio" value="cozinheiro"/>
         
         <label for="hall" class="radio-label">Salão</label>
         <input required="" name="jobPosition" className="cadInputOption" id="hall" type="radio" value="garcom"/>

        
        </div>

        
         

        <button className="btn submits login" onClick={(e) => {

          e.preventDefault();

          fetch('https://lab-api-bq.herokuapp.com/users/', {
            method: 'POST',
            headers: {
              'accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `email=${email}&password=${password}&role=${role}&restaurant=BurgerHunger&name=${name}`
          })
            .then((response) => response.json())
            .then((json) => {
              console.log(json);
              if(json.id !== null) 
              setName('');
              setEmail('');
              setPassword('');
              setRole('');
            })
        }}>Cadastrar</button>
         <button class="btn submits sign-up" onClick={routerLogin}>Entrar
          </button>
      </form>
    </div>
    
  );
}

export default Register;