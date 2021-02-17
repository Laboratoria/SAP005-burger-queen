import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Login } from './pages/login'
import { SignUp } from './pages/signup'
//import { NewOrder } from './pages/NewOrder/index'
import { StatusOrder } from './pages/StatusOrder/index'
import ClientInfo from './components/ClientInfo/ClientInfo'

export const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Login} exact />
      <Route path='/signup' component={SignUp} exact />
      <Route path='/new-order' component={ClientInfo} exact />
      <Route path='/status-order' component={StatusOrder} exact />
    </Switch>
  )
}
