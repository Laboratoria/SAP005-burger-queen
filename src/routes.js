import React from 'react'
import { SignUp } from './pages/Signup/index'
import { Login } from './pages/Login/index'
import { Navbar } from './components/Navbar/Navbar'
import { Switch, Route } from 'react-router-dom'

export const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Login} exact />
      <Route path='/signup' component={SignUp} exact />
      <Route path='/status-order' component={SignUp} exact />
    </Switch>
  )
}
