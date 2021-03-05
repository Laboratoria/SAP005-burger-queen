import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Login from "./pages/Login/Login.js";
import Register from "./pages/Register/Register.js";
import Hall from "./pages/Hall/Hall.js";
import Kitchen from "./pages/Kitchen/Kitchen.js"
import OrderReady from "./pages/OrderReady/OrderReady.js";
import OrderFinished from "./pages/OrdersFinished/OrdersFinished.js"
import { BrowserRouter, Switch, Route } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/Register" component={Register} />
      <Route path="/Login" component={Login} />
      <Route path ="/Hall" component={Hall} exact/>
      <Route path ="/Kitchen" component={Kitchen} exact/>
      <Route path ="/OrderReady" component={OrderReady} exact/>
      <Route path ="/OrderFinished" component={OrderFinished} exact/>

    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
