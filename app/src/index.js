import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
// import SignupPage from './components/SignupPage';
import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <SignupPage/>
    {/* <LoginPage/> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
