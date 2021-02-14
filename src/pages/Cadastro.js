import FormCadastro from '../components/FormCadastro.js';
import Logo from '../assets/Logo_Burger-Beef .png';
import './Cadastro.css';

function Cadastro() {
  return (
    <div className="page-cadastro">
      <header className="header-cadastro">
        <img className="logo-cadstro" title="logo" src={Logo} alt='logo' />
      </header>
      <FormCadastro />
    </div>
  );
}

export default Cadastro;
