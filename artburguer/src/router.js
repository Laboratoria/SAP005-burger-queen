import React, { useContext, createContext, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./auth";

import AppLogin from "./pages/login.js";
import App from "./pages/register.js";
import Orders from "./pages/orders.js";
import Salao from "./pages/salao.js";
import Cozinha from "./pages/cozinha.js";

const PrivateRoute = ({ component: Component, ...rest }) => {
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />;
};

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={AppLogin} />
        <Route path="/register" exact component={App} />
        <Route path="/orders" exact component={Orders} />
        <Route path="/salao" exact component={Salao} />
        <Route path="/cozinha" exact component={Cozinha} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
