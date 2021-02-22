import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Login  from "./pages/Login/index";
import Register from "./pages/Register/index";
import Confirm from "./pages/ConfirmCad/Confirm";
import Hall from "./pages/Hall/Hall.js";
import { BrowserRouter, Switch, Route } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/register" component={Register} />
      <Route path="/confirm" component={Confirm} />
      <Route path="/login" component={Login} exact/>
      <Route path = "/hall" component={Hall} exact/>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
