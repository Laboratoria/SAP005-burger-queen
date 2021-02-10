import React from 'react';
import { Link } from 'react-router-dom';
import './AnotarPedido.css';

function AnotarPedidos() {
  return (
    <div className="">
      <header className="">
        <p><Link to='/AnotarPedidos'>Anotar Pedidos</Link></p>
        <p><Link to='/PedidosProntos'>Pedidos Prontos</Link></p>
        <button><Link to='/'>Sair</Link></button>
      </header>
    </div>
  );
}

export default AnotarPedidos;
