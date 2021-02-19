import React from 'react';
import {BrowserRouter, Route,  Switch } from 'react-router-dom';

import Hall from './pages/Hall'
import Kitchen from './pages/kitchen'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './Components/Header'

function Routes() {
    return (
        
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/"component={Login} exact/>
                <Route path="/Register"component={Register}exact />
                <Route path="/Hall" component={Hall} exact /> 
                <Route path="/Kitchen"component={Kitchen} exact/>
            </Switch>
        </BrowserRouter>
        
      
    )
    
    }

export default Routes

