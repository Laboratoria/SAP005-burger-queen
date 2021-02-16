import React from 'react'
import {BrowserRouter, Route,  Switch } from 'react-router-dom'

import Lounge from './pages/Lounge'
import Kitchen from './pages/kitchen'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './Components/Header'





function Routes() {
    return (
        
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/"component={Login} exact/>
                <Route path="/Register"component={Register} />
                <Route path="/Lounge" component={Lounge}  /> 
                <Route path="/Kitchen"component={Kitchen}/>
            </Switch>
        </BrowserRouter>
        
      
    )
    
    }

export default Routes

