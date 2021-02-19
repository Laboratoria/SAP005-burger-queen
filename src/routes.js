import React from 'react'
import {BrowserRouter , Switch, Route} from 'react-router-dom'

import Lounge from './pages/Lounge'
import Kitchen from './pages/kitchen'
import Login from './pages/login'
import Register from './pages/register'



function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/"  exact component={Login}/>
                <Route path="/register" exact component={Register}  />
                <Route path="/lounge"  exact component={Lounge} /> 
                <Route path="/kitchen" exact component={Kitchen} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes

