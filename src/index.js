import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Hall from "./pages/Hall/Hall.js";
import Kitchen from "./pages/Kitchen/Kitchen.js"
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/Register" component={Register} />
      <Route path="/Login" component={Login} />
      <Route path ="/Hall" component={Hall} exact/>
      <Route path ="/Kitchen" component={Kitchen} exact/>

    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
