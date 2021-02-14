import { Link, useHistory } from 'react-router-dom';
import React, { useState} from 'react';
import '../../Styles/Cadastro.css';
import Header from '../../components/HeaderLogin/index.js';
import Footer from '../../components/Footer/index.js';



function Cadastro() {
  
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
 

  const handleSignUp = (event) => {
    event.preventDefault();
 
    
    const options = {
      method: 'POST',
      headers: { accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded' 
              },
      body: `email=${email}&password=${password}&role=${role}&restaurant=BurgerBeef&name=${name}`
    };

    fetch('https://lab-api-bq.herokuapp.com/users', options)
    .then(response=>{response.json()
        .then(data=>{
          history.push('/');
        })})
    .catch(e => console.log("Deu erro" + e.message))

}

  return (
    <div className="page-cadastro">

      <Header/>

      <form className="form-cadastro">
        <label>
          Nome:
          <input type="text" name='nome' className='input-text' value={name} onChange={(event) => setName(event.target.value)}/>
        </label>

        <label>
          E-mail:
          <input type="text" name='email' className='input-text' value={email}  onChange={(event) => setEmail(event.target.value)}/>
        </label>

        <label>
          Senha:
          <input type="password" name='senha' className='input-text' value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>

        <label>
          Role:
          <input type="text" name='role' className='input-text' value={role} onChange={(event) => setRole(event.target.value)} />
        </label>

        {/* <section className='option-setor'>
        <p className='setor'>Setor:</p>
          <label>
            <input type="radio" value="cozinha" name="role" className='input-radio' value={role} onChange={(event) => setRole(event.target.value)}/>
            Cozinha
          </label>

          <label>
            <input type="radio" value="salão" name="role" className='input-radio' value={role} onChange={(event) => setRole(event.target.value)}/>
            Salão
          </label>
        </section> */}
{/* 
        <label>
          Restaurante:
          <input type="text" name='nomeRestaurante' className='input-text'/>
        </label> */}

        <button  value='enviar' className='btn-cadastrar' onClick={handleSignUp}>CADASTRAR</button>
      </form>

        <button><Link to='/'>Login</Link></button>
      <Footer/>
      
    </div>
  );
}

export default Cadastro;
