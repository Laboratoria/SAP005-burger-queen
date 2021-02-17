import React from 'react';
import { Link } from 'react-router-dom';
import HeaderMain from '../../components/HeaderMain/index.js';
import CardapioCafeManha from '../../components/CardapioCafeManha/index';
import '../../Styles/AnotarPedido.css';

function AnotarPedidos() {

  return (
    <div className="">
      <HeaderMain />
      <nav>
        <ul>
          <li><Link to='/AnotarPedidos'>Anotar Pedidos</Link></li>
          <li><Link to='/PedidosProntos'>Pedidos Prontos</Link></li>
        </ul>
      </nav>
      <CardapioCafeManha />
    </div>
  );
}

export default AnotarPedidos;
