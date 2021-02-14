import { Link, useHistory } from 'react-router-dom';
import '../../Styles/Login.css';
import React, { useState} from 'react';
import Footer from '../../components/Footer/index.js';
import Header from '../../components/HeaderLogin/index.js';
import IconUser from '../../assets/user.png';
import IconPassword from '../../assets/padlock.png';


function Login() {

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSignIn = (event) => {
    event.preventDefault();
 
    
    const options = {
      method: 'POST',
      headers: { accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded' 
              },
      body: `email=${email}&password=${password}&restaurant=BurgerBeef`
    };

    fetch('https://lab-api-bq.herokuapp.com/auth', options)
    .then(response=>{response.json()
        .then(data=>{
          history.push('/AnotarPedidos');
        })})
    .catch(e => console.log("Deu erro" + e.message))

}

  return (

    <section className="page-login">
      
      <Header/>

      <form className="form-login">

        <div className="field-login">
          <p>E-mail: </p>
          <div className="input-container">
            <img className="icon-user"  src={IconUser} alt='icon-user' />
            <input type="text" value={email}  onChange={(event) => setEmail(event.target.value)}/>
          </div>
        </div>

        <div className="field-login">
          <p>Senha: </p>
          <div className="input-container">
            <img className="icon-user" src={IconPassword} alt='icon-password' />
            <input type="password" value={password}  onChange={(event) => setPassword(event.target.value)} />
          </div>
        </div>

      </form>

      <div className="option-login">
        <button className="btn-login" onClick={handleSignIn}>ENTRAR</button>
        <h3>Ou clique <Link to='/Cadastro'>AQUI</Link> para se cadastrar.</h3>
      </div>

      <Footer/>

    </section>
  
  );
}

export default Login;
