import React from 'react';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Kitchen } from './pages/kitchen';


import { Switch, Route } from 'react-router-dom';

export const Routes = () => {
    return (
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/register' component={Register} />
        <Route path='/kitchen' component={Kitchen} />
      </Switch>
    );
};