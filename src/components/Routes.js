import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login'
import Register from '../pages/Register';
import Kitchen from '../pages/Kitchen';
import Salon from '../pages/Salon';
import Pagina404 from '../pages/Pagina404';
import PaginaPedidos from '../pages/PaginaPedidos';

const PrivateRoute = ({component: Component, ...rest }) => (
    <Route 
        {...rest}
        render={props => 
          localStorage.getItem("token") ? (
            <Component { ...props} />
          ) : (
            <Redirect to={{pathname: "/login", state: { from: props.location } }} />
          )
        }
    />
);

function Routes() {

    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register}/>
            <PrivateRoute path="/cozinha" component={Kitchen}/>
            <PrivateRoute path="/salao" component={Salon}/>
            <PrivateRoute path="/pedidos/:mesa" component={PaginaPedidos} />

            <PrivateRoute component={Pagina404}/>
        </Switch>
   
    );
}
  
export default Routes;
