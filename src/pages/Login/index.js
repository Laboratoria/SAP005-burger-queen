import { Link } from 'react-router-dom';
import '../../Styles/Login.css';
import Footer from '../../components/Footer/index.js';
import Header from '../../components/HeaderLogin/index.js';
import IconUser from '../../assets/user.png';
import IconPassword from '../../assets/padlock.png';


function Login() {
  return (

    <section className="page-login">
      
      <Header/>

      <form className="form-login">

        <div className="field-login">
          <p>E-mail: </p>
          <div className="input-container">
            <img className="icon-user"  src={IconUser} alt='icon-user' />
            <input type="text" />
          </div>
        </div>

        <div className="field-login">
          <p>Senha: </p>
          <div className="input-container">
            <img className="icon-user" src={IconPassword} alt='icon-password' />
            <input type="password" />
          </div>
        </div>

      </form>

      <div className="option-login">
        <button className="btn-login">ENTRAR</button>
        <h3>Ou clique <Link to='/Cadastro'>AQUI</Link> para se cadastrar.</h3>
      </div>

      <Footer/>

    </section>
  
  );
}

export default Login;
