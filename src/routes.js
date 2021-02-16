import React from 'react';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Kitchen } from './pages/Kitchen/Kitchen';
import { Lounge } from './pages/Lounge/Lounge';

import { Switch, Route } from 'react-router-dom';

export const Routes = () => {
    return (
      <Switch>
        <Route path='/' component={Login} exact />
        <Route path='/Register' component={Register} exact />
        <Route path='/Kitchen' component={Kitchen} exact />
        <Route path='/Lounge' component={Lounge} />
      </Switch>
    );

};