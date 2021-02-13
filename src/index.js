import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Login } from "./pages/Login/index";
import { Register } from "./pages/Register/index";
import { BrowserRouter, Switch, Route } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Login} exact/>
      <Route path='/register' component={Register}  />
    </Switch> 
  </BrowserRouter>
  //<React.StrictMode>
  //<App />
  //</React.StrictMode>
  ,
  document.getElementById("root")
);
