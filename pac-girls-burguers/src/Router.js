import React from "react";
import Cozinha from "./Components/Cozinha/Cozinha";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Salao from "./Components/Salao/Salao";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRouter/ProtectedRouter";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/cadastro" component={Register} />
        <ProtectedRoute path="/cozinha" component={Cozinha} />
        <ProtectedRoute path="/salao" component={Salao} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
