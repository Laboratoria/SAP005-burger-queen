import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Hall from './pages/Hall';
import Login from './pages/Login';
import Register from './pages/Register';
import Kitchen from './pages/Kitchen';

//função responsável por determinar as rotas

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/Register" component={Register}/>
                <Route path="/Hall" component={Hall}/>
                <Route path="/Kitchen" component={Kitchen}/>
            </Switch>
        </BrowserRouter>
    )
    
};

export default Routes;