import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = props => {
    const userToken = localStorage.getItem('token');
    return userToken ? <Route {...props}/> : <Redirect to= '/'/> 
};

export default PrivateRoute;