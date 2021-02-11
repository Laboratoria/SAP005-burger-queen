import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Kitchen from '../pages/kitchen/Kitchen';
import Hall from '../pages/hall/Hall';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route 
        component={props => <Login {...props} />} 
        exact path='/'
      />
      <Route 
        component={props => <Register {...props} />} 
        exact path='/register'
      />
      <Route 
        component={props => <Kitchen {...props} />} 
        exact path='/kitchen'
      />
      <Route 
        component={props => <Hall {...props} />} 
        exact path='/hall'
      />
    </Switch>
  </BrowserRouter>
)

export default Routes;