import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Hall/index';
import Login from './pages/Login/index';
import Registry from './pages/Registry/index';
import Kitchen from './pages/Kitchen/index';
import Menu from './pages/Menu/index';
import Pending from './pages/Pending/index';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/Registry" component={Registry}/>
                <Route path="/Hall" component={Home}/>
                <Route path="/Kitchen" component={Kitchen}/>
                <Route path="/Menu" component={Menu}/>
                <Route path="/Pendentes" component={Pending}/>
            </Switch>
        </BrowserRouter>
    )  
};

export default Routes;