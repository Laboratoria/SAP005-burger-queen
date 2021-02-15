import React from 'react';
import { Link } from 'react-router-dom';
import  HeaderMain from '../../components/HeaderMain/index.js';
import '../../Styles/AnotarPedido.css';

function AnotarPedidos() {

  return (
    <div className="">
        <HeaderMain/>
        <p><Link to='/AnotarPedidos'>Anotar Pedidos</Link></p>
        <p><Link to='/PedidosProntos'>Pedidos Prontos</Link></p>
        <button><Link to='/'>Sair</Link></button>

    </div>
  );
}

export default AnotarPedidos;
