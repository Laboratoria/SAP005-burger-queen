import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home/index";
import { Login } from "../pages/Login/index";
import { Register } from "../pages/Register/index";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
      <Route component={() => <div>Page 404!</div>} />
    </Switch>
  );
};

export { Routes };
