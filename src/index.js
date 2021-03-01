import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);
