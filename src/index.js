import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
<<<<<<< HEAD

import Login  from "./pages/Login/Login";
import Register from "./pages/Register/Register";
=======
import Login  from "./pages/Login/index";
import Register from "./pages/Register/index";
>>>>>>> fc8213de9ead88b146a9e08daa4eac16a2268757
import Confirm from "./pages/ConfirmCad/Confirm";
import Hall from "./pages/Hall/Hall.js";
import Kitchen from "./pages/Kitchen/Kitchen.js"
import { BrowserRouter, Switch, Route } from 'react-router-dom'



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/Register" component={Register} />
      <Route path="/Confirm" component={Confirm} />
      <Route path="/Login" component={Login} />
      <Route path ="/Hall" component={Hall} exact/>
      <Route path ="/Kitchen" component={Kitchen} exact/>

    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
