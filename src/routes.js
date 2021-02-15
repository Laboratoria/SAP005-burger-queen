import React from 'react'
import { SignUp } from './pages/signup'
import { Login } from './pages/login'
import { Switch, Route } from 'react-router-dom'

export const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Login} exact />
      <Route path='/signup' component={SignUp} exact />
      <Route path='/status-order' component={SignUp} exact />
      <Route path='/new-order' component={SignUp} exact />
    </Switch>
  )
}
