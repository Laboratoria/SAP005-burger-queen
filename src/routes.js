import React from 'react'
import { SignUp } from './pages/Signup/index'
import { Login } from './pages/Login/index'
import NewOrder from './pages/NewOrder/index'
import { StatusOrder } from './pages/StatusOrder/index'
//import ClientInfo from './components/ClientInfo/ClientInfo'
import { Switch, Route } from 'react-router-dom'

export const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Login} exact />
      <Route path='/signup' component={SignUp} exact />
      <Route path='/new-order' component={NewOrder} exact />
      <Route path='/status-order' component={StatusOrder} exact />
    </Switch>
  )
}
