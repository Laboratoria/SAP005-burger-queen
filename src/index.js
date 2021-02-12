import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import SingnUp from './pages/SingnUp';
import Waiter from './pages/Waiter'
import Kitchen from './pages/Kitchen'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} exact />
      <Route path='/singnUp' component={SingnUp} exact /> 
      <Route path='/waiter' component={Waiter}exact /> 
      <Route path='/kitchen' component={Kitchen} /> 
      <Route component={() => <div>Page 404</div>}/>
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
