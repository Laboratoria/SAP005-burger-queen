import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import Login from './pages/Login'
import Register from './pages/Register';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Kitchen } from './pages/Kitchen';
import { Salon } from './pages/Salon';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/login"component={Login} />
      <Route path="/register"component={Register}/>
      <Route path="/kitchen"component={Kitchen}/>
      <Route path="/salon"component={Salon}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
