import { Link } from 'react-router-dom';
import './PedidosProntos.css';

function PedidosProntos() {
  return (
    <div className="">
      <header className="">
        <p><Link to='/AnotarPedidos'>Anotar Pedidos</Link></p>
        <p><Link to='/PedidosAFazer'>Pedidos Prontos</Link></p>
        <button><Link to='/'>Sair</Link></button>
      </header>
    </div>
  );
}

export default PedidosProntos;
