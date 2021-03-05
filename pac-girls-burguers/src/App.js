import React from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import Saloon from "./pages/Saloon";
import Kitchen from "./pages/Kitchen";
import ReactTooltip from "react-tooltip";
import { Container, Menu, PageBody, Button } from "./AppStyled";
import MenuItem from "./components/MenuItem";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import ProtectedRoute from "./components/ProtectedRouter/ProtectedRouter";
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
          <MenuItem title="Home" icon="/assets/storeImg.png" link="/" />
          <MenuItem
            title="Register"
            icon="/assets/profile.png"
            link="/register"
          />
          <Button onClick={handleLogout}>Sair</Button>
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
          </Switch>
        </PageBody>
        <ReactTooltip id="tip-top" place="top" effect="solid" />
        <ReactTooltip id="tip-right" place="right" effect="solid" />
      </Container>
    </BrowserRouter>
  );
};
