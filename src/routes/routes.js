import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Login } from '../pages/login/login'
import { SignUp } from '../pages/signup/signup'
import { NewOrder } from '../pages/hall/new-order/new-order'
import ClientInfo from '../components/hall-components/client-info/client-info'
import { StatusOrder } from '../pages/status-order/status-order'

export const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Login} exact />
      <Route path='/signup' component={SignUp} />
      <Route path='/new-order' component={NewOrder} />
      <Route path='/client-info' component={ClientInfo} />
      <Route path='/status-order' component={StatusOrder} />
    </Switch>
  )
}
