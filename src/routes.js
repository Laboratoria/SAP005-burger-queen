import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Hall';
import Login from './pages/Login';
import Registry from './pages/Registry';
import Kitchen from './pages/Kitchen';
import Menu from './pages/Menu';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/Registry" component={Registry}/>
                <Route path="/Hall" component={Home}/>
                <Route path="/Kitchen" component={Kitchen}/>
                <Route path="/Menu" component={Menu}/>
            </Switch>
        </BrowserRouter>
    )
    
};

export default Routes;