import React from 'react';
import {BrowserRouter, Route,  Switch } from 'react-router-dom';

import Hall from './pages/Hall'
import Kitchen from './pages/Kitchen'
import Login from './pages/Login'
import Register from './pages/Register'
import NavBar from './Components/Navigation/NavBar.js'

function Routes() {
    return (
        
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/Register"component={Register} />
                <Route path="/Hall" component={Hall} /> 
                <Route path="/Kitchen"component={Kitchen} />
                
            </Switch>
        </BrowserRouter>
        
      
    )
    
    }

export default Routes

