import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import SingUp from './pages/SignUp';
import Waiter from './pages/Waiter'
import Kitchen from './pages/Kitchen'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/SignUp' component={SignUp} exact /> 
      <Route path='/waiter' component={Waiter} exact /> 
      <Route path='/kitchen' component={Kitchen} /> 
      <Route component={() => <div>Page 404</div>}/>
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);

reportWebVitals();
