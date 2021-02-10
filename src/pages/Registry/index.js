import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';

function Registry() {
  const [emailCadastro, inEmail] = useState('');
  const [passwordCadastro, inPassword] = useState('');
  const [setorCadastro, inSetor] = useState('');
  const urlCreate = `email=${emailCadastro}&password=${passwordCadastro}&role=${setorCadastro}&restaurant=RatatouilleBurger`;
  const history = useHistory();
  
  //curl -X POST "https://lab-api-bq.herokuapp.com/users" -H  "accept: application/json" -H  "Content-Type: application/x-www-form-urlencoded" -d "email=caroline%40carol.com&password=1234567&role=Cozinha&restaurant=Ratatouille"
  
  const routerHall = () => {
    history.push('/Hall')
  }

  const routerKitchen = () => {
    history.push('/Kitchen')
  }

  const fetchRegistry = () => {
    fetch('https://lab-api-bq.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: urlCreate
    })
     
      .then((response) => response.json())
      .then((json) => {
        console.log(json.role)
        if(json.role === "garcom"){
          routerHall();
        }
        else if(json.role === "cozinha"){
          routerKitchen();
        }
        else{
          alert(json.message)
        }
      })
  }
  
  return (
    <div>
        <h1>Criar Conta</h1>
        <form>
        <label htmlFor="inputEmail" className="inputEmail"></label>
          <input type='text' autoComplete='username' placeholder='email' value={emailCadastro} onChange={(event) => inEmail(event.target.value)}></input>

          <label htmlFor="inputPassword" className="inputPassword"></label>
          <input type='password' autoComplete='password' placeholder='Senha' value={passwordCadastro} onChange={(event) => inPassword(event.target.value)}></input>

        {/*    <input type='password' placeholder='Confirmar senha'></input> */}

          <label htmlFor="inputSetor" className="inputSetor"></label>
          <select className="cargo" value={setorCadastro} onChange={(event) => inSetor(event.target.value)}>
              <option disabled value=''>Cargo</option>
              <option value="garcom">Garçom</option>
              <option value="cozinha">Cozinha</option>
        </select>

          <button className='submit-create' type='submit' onClick={(e) => {
            e.preventDefault();
            fetchRegistry();

          }}>Criar</button>
            <Link to="/">Voltar</Link>
        </form>
        </div>
        );
}
export default Registry;