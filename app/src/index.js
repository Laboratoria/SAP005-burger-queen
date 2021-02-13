import React from 'react';
import ReactDOM from 'react-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <Signup />
    <Login />
  </React.StrictMode>,
  document.getElementById('root'),
);
