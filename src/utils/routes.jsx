import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hall from "../pages/Hall/index";
import Kitchen from "../pages/Kitchen/index";
import Login from "../pages/Login/index";
import Register from "../pages/Register/index";

const Routes = () => {
  return (<BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/Hall" component={Hall} />
      <Route exact path="/Kitchen" component={Kitchen} />
      <Route component={() => <div>Page 404!</div>} />
    </Switch>
  </BrowserRouter>)
};

export default Routes;