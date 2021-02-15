import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cadastro from './pages/Cadastro';
import App from './App';
import Login from './pages/Login';
import Salao from './pages/Salao';
import Cozinha from './pages/Cozinha';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path = "/" component={App}  exact/>
      <Route path = "/cadastro" component={Cadastro} exact/>
      <Route path = "/login" component={Login} exact/>
      <Route path = "/salao" component={Salao} exact/>
      <Route path = "/cozinha" component={Cozinha} exact/>
    </Switch>  
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
