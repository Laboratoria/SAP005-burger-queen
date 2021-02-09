import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Registry from './pages/Registry';
import Kitchen from './pages/Kitchen';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/Registry" component={Registry}/>
                <Route path="/Home" component={Home}/>
                <Route path="/Kitchen" component={Kitchen}/>
            </Switch>
        </BrowserRouter>
    )
    
};

export default Routes;