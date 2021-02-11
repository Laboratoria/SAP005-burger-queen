import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './pages/App';
import Login from './pages/Login'
import Register from './pages/Register';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Kitchen from './pages/Kitchen';
import Salon from './pages/Salon';
import Pagina404 from './pages/Pagina404';

import { isAuthenticated } from './pages/Login';

const PrivateRoute = ({component: Component, ...rest }) => (
    <Route 
        {...rest}
        render={(props) => {
          isAuthenticated() === true ? (<Component { ...props} />) : (<Redirect to={{pathname: "/login", state: { from: props.location } }} />)
        }}
    />
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/login"component={Login} />
      <Route path="/register"component={Register}/>
      <Route path="/kitchen"component={Kitchen}/>
      <PrivateRoute path="/salao"component={Salon}/>
      <Route component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
