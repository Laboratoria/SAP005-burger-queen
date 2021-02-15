import React from 'react';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

import { Kitchen } from './pages/Kitchen';


import { Switch, Route } from 'react-router-dom';

export const Routes = () => {
    return (
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/Register' component={Register} />
        <Route path='/Kitchen' component={Kitchen} />
      </Switch>
    );

};