import React from 'react'
import { SignUp } from './pages/signup'
import { Login } from './pages/login'
import { Navbar } from './components/Navbar'
import { Switch, Route } from 'react-router-dom'

export const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={Login} exact />
      <Route path='/signup' component={SignUp} exact />
      <Route path='/status-order' component={SignUp} exact />
      <Route path='/navbar' component={Navbar} exact />
    </Switch>
  )
}
