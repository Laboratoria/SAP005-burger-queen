import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Register } from './pages/authenticationPages/Register';
import App from './pages/authenticationPages/Home';
import { Login }  from './pages/authenticationPages/Login';
import Hall from './pages/Hall/Hall';
import Kitchen from './pages/Kitchen/Kitchen';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path = "/" component={App}  exact/>
      <Route path = "/Register" component={Register} exact/>
      <Route path = "/Login" component={Login} exact/>
      <Route path = "/Hall" component={Hall} exact/>
      <Route path = "/kitchen" component={Kitchen} exact/>
    </Switch>  
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
