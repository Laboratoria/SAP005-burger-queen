import React from 'react';
import { Router, Switch, Route } from 'react-router';
import {  history } from '../utils/history';

import Login from '../pages/login/login';
import Register from '../pages/register/register';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route 
        component={Login} 
        exact path='/'/>
      <Route 
        component={Register} 
        exact path='/register'/>
    </Switch>
  </Router>
)

export default Routes;