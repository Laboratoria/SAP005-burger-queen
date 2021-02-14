import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home/index";
import Login from "../pages/Login/index";
import Register from "../pages/Register/index";

const Routes = () => {
  return (<BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Register" component={Register} />
      <Route component={() => <div>Page 404!</div>} />
    </Switch>
  </BrowserRouter>)
};

export default Routes;