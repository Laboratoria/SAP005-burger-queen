import { Link } from 'react-router-dom';
import HeaderMain from '../../components/HeaderMain/index.js';
import '../../Styles/PedidosProntos.css';

function PedidosProntos() {
  return (
    <div className="">
      <HeaderMain />
      <nav>
        <ul>
          <li><Link to='/AnotarPedidos'>Anotar Pedidos</Link></li>
          <li><Link to='/PedidosProntos'>Pedidos Prontos</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default PedidosProntos;
