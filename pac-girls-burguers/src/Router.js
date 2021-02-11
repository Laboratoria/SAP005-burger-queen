import React from "react";
import Cozinha from "./Components/Cozinha/Cozinha";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Salao from "./Components/Salao/Salao";

import { BrowserRouter, Route, Switch } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/cadastro">
          <Register />
        </Route>
        <Route path="/cozinha">
          <Cozinha />
        </Route>
        <Route path="/salao">
          <Salao />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
