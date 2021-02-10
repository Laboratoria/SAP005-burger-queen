import { Link } from 'react-router-dom';
import Logo from '../assets/Logo_Burger-Beef .png'
import IconUser from '../assets/user.png'
import IconPassword from '../assets/padlock.png'


import './Login.css';

function Login() {
  return (
    <div className="page-login">
      <header className="header-login">
        <img className="logo-login" title="logo" src={Logo} alt='logo' />
      </header>
      <form className="form-login">
        <div className="field-login">
          <p>E-mail: </p>
          <div className="input-container">
            <img className="icon-user" title="logo" src={IconUser} alt='icon-user' />
            <input type="text" />
          </div>
        </div>
        <div className="field-login">
          <p>Senha: </p>
          <div className="input-container">
            <img className="icon-user" title="logo" src={IconPassword} alt='icon-password' />
            <input type="password" />
          </div>
        </div>
      </form>
      <div className="option-login">
        <button className="btn-login">ENTRAR</button>
        <h3>Ou clique <Link to='/Cadastro'>AQUI</Link> para se cadastrar.</h3>
      </div>
    </div>
  );
}

export default Login;
