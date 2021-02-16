import React, { useContext, createContext, useState } from "react";
import AppLogin from './pages/login.js';
import App from './pages/register.js'; 
import Orders from './pages/orders.js';
import { Switch, Route } from 'react-router-dom';

const Routes = () =>{
    return(
        <Switch>
            <Route path='/' exact component={AppLogin} />
            <Route path='/register' exact component={App} />
            <Route path='/orders' exact component={Orders} />
        </Switch> 
    )
};

export default Routes;