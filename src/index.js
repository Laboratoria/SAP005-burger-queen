import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Login from './pages/Login.js';
import Cadastro from './pages/Cadastro'
import AnotarPedidos from './pages/AnotarPedido.js';
import PedidosAFazer from './pages/PedidosAFazer.js';
import PedidosProntos from './pages/PedidosProntos.js';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Login} exact />
    <Route path="/Cadastro" component={Cadastro} exact />
    <Route path="/AnotarPedidos" component={AnotarPedidos} exact />
    <Route path="/PedidosAFazer" component={PedidosAFazer} exact />
    <Route path="/PedidosProntos" component={PedidosProntos} exact />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
