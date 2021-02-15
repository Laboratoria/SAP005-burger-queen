import React, { useContext, createContext, useState } from "react";
import Login from './pages/login.js';
import Register from './pages/register.js'; 
import Orders from './pages/orders.js';
import { Switch, Route, Router, Redirect,
    useHistory,
    useLocation } from 'react-router-dom';

const Routes = () =>{
    return(
       
            <Router>
                <Switch>
                    <Route path='/' exact component={Login} />
                    <Route path='/register' exact component={Register} />
                    <Route path='/orders' exact component={Orders} />
                        
                    
                </Switch>

            </Router>
       
        
    )
};

export default Routes;