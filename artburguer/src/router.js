import React from "react";
import Login from './pages/login.js';
import Register from './pages/register.js'; 
import Orders from './pages/orders.js';
import { Switch, Route } from 'react-router-dom';

const Routes = () =>{
    return(
        <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/register' exact component={Register} />
            <PrivateRoute path='/orders' exact component={Orders} >
                <ProtectedPage/>
                
            </PrivateRoute>
        </Switch>
    )
};

export default Routes;