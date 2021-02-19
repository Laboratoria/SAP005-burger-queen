import React from 'react';
import isAuthenticated from './auth'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Hall from './pages/Hall';
import Login from './pages/Login';
import Register from './pages/Register';
import Kitchen from './pages/Kitchen';

//função responsável por determinar as rotas

const PrivateRoute = ({ component: Component, ... rest }) => (
    <Route { ... rest} render={props => (
        isAuthenticated() ? (
            <Component { ...props} />
        ) : (
            <Redirect to={{ pathname:'/', satate: {from: props.location} }} />
        )
    )}/>
)


const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login}  />
            <Route path="/Register" exact component={Register}  />
            <PrivateRoute path="/Hall" exact component={Hall}  />
            <PrivateRoute path="/Kitchen" exact component={Kitchen}  />
        </Switch>
        </BrowserRouter>
    )
};
export default Routes;