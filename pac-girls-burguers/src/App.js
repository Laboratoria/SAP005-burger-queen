import React from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import Saloon from "./pages/Saloon";
import Kitchen from "./pages/Kitchen";
import ReactTooltip from "react-tooltip";
import { Container, Menu, PageBody } from "./AppStyled";
import MenuItem from "./components/MenuItem";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import ProtectedRoute from "./components/ProtectedRouter/ProtectedRouter";
import Order from "./components/Order";
export default () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <BrowserRouter>
      <Container>
        <Menu>
          <MenuItem
            title="Voltar"
            icon="/assets/storeImg.png"
            onClick={() => history.goBack()}
          />
          <MenuItem title="Home" icon="/assets/storeImg.png" link="/" />
          <MenuItem title="Pedidos" icon="/assets/order.png" link="/orders" />
          <MenuItem
            title="Register"
            icon="/assets/profile.png"
            link="/register"
          />
          <button icon="" onClick={handleLogout}>
            Sair
          </button>
        </Menu>
        <PageBody>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <ProtectedRoute exact path="/kitchen">
              <Kitchen />
            </ProtectedRoute>
            <ProtectedRoute path="/saloon">
              <Saloon />
            </ProtectedRoute>
            <ProtectedRoute path="/orders">
              <div>Tela de pedidos</div>
            </ProtectedRoute>
          </Switch>
        </PageBody>
        <ReactTooltip id="tip-top" place="top" effect="solid" />
        <ReactTooltip id="tip-right" place="right" effect="solid" />
      </Container>
    </BrowserRouter>
  );
};
