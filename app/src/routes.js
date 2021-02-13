import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login/index.js';
import Signup from './pages/Signup/index';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' component={Login} exact />
      <Route path='/cadastro' component={Signup} />
      <Route component={() => <div>Page 404</div>} />
    </Switch>
  );
}
