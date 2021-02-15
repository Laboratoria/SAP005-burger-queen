import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import './Cadastro.css';

function Cadastro() {
  const history = useHistory()

  const routerConfirm = ()=>{
    history.push('/confirmado')
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  return (
    <div className="Cadastro">
      <h1 className="CadTitle">Cadastro</h1>
      <form className="FormCadastro">
        <label className="cadLabel" htmlFor="cadInputName">Nome:</label>
        <input type="text" placeholder="Nome" className="cadInput" value={name} onChange={(event) => setName(event.target.value)} />

        <label className="cadLabel" htmlFor="cadInputEmail">E-mail:</label>
        <input type="text" placeholder="E-mail" className="cadInput" value={email} onChange={(event) => setEmail(event.target.value)} />

        <label className="cadLabel" htmlFor="cadInputPassword">Senha:</label>
        <input type="password" placeholder="Senha" className="cadInput" value={password} onChange={(event) => setPassword(event.target.value)} />

        <label className="cadLabel" htmlFor="cadInputRole">Cargo:</label>
        <select name="ordenar" className="cadInput cardSelect" value={role} onChange={(event) => setRole(event.target.value)}>
          <option  className="cadInputOption" disabled value=''>Cargo</option>
          <option className="cadInputOption" value="garcom">Garçom</option>
          <option className="cadInputOption" value="cozinheiro">Cozinheiro</option>
        </select>
        <button className="cadBtn" onClick={(e) => {

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
              if(json.id !== null) {                               
                routerConfirm();
              }
              setName('');
              setEmail('');
              setPassword('');
              setRole('');
            })
        }}>Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;