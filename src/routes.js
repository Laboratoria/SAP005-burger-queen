import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import isAuthenticated from './auth.js';

import Login from '../src/pages/Login/index.js';
import Cadastro from '../src/pages/SignUp/index.js'
import AnotarPedidos from '../src/pages/AnotarPedido/index.js';
import PedidosAFazer from '../src/pages/PedidosAFazer/index.js';
import PedidosProntos from '../src/pages/PedidosProntos/index.js';

const PrivateRoute = ({ component: Component, ... rest }) => (
    <Route { ... rest} render={props => (
        isAuthenticated() ? (
            <Component { ...props} />
        ) : (
            <Redirect to='/' />
        )
    )}/>
)


const Routes = () => {
    return (

        <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/Cadastro" component={Cadastro} exact />
            <PrivateRoute path="/AnotarPedidos" component={AnotarPedidos} exact />
            <PrivateRoute path="/PedidosAFazer" component={PedidosAFazer} exact />
            <PrivateRoute path="/PedidosProntos" component={PedidosProntos} exact />
            <PrivateRoute component={() => <div>Page 404!</div>} />
        </Switch>

    )
};

export default Routes;