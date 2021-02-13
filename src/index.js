import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import  Login from './pages/Login/index.js';
import  Register from './pages/Register/index.js';

import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/register" component={Register} exact/>
      <Route component={() => <div>Page 404!"</div>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
