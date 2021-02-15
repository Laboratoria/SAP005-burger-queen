import React from 'react';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import NavBar from './ui/NavBar.js';

import { Switch, Route } from 'react-router-dom';

   
export const Routes = () => {
    return(
    <Switch>
       
      <Route path="/" component={Login} exact/>
      <Route path="/Register" component={Register} />
      
    </Switch>
    
    )

};