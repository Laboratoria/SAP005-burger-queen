import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="">
      <header className="">
        
      </header>
      <button><Link to='/AnotarPedidos'>Salão</Link></button>
      <button><Link to='/PedidosAFazer'>Cozinha</Link></button>
      <p>Ou clique <Link to='/Cadastro'>Aqui</Link> para se cadastrar.</p>
    </div>
  );
}

export default Login;
