import { Link } from 'react-router-dom';
import '../../Styles/PedidosAFazer.css';
import  HeaderMain from '../../components/HeaderMain/index.js';

function PedidosAFazer() {
  return (
    <div className="">
      <header className="">
        <HeaderMain/>
        <button><Link to='/'>Sair</Link></button>
      </header>
    </div>
  );
}

export default PedidosAFazer;
