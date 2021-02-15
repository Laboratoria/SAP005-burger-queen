import React from "react";
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login'
import Register from '../pages/Register';
import Kitchen from '../pages/Kitchen';
import Salon from '../pages/Salon';
import Pagina404 from '../pages/Pagina404';

function Routes() {
    return (
        <Switch>
            <Route path="/"component={Login} exact/>
            <Route path="/register"component={Register}/>
            <Route path="/cozinha"component={Kitchen}/>
            <Route path="/salao"component={Salon}/>
            <Route component={Pagina404}/>
        </Switch>
   
    );
}
  
export default Routes;
