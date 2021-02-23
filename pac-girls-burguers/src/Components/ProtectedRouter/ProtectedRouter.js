import React from 'react';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const { path, component } = props;
  const history = useHistory();

  const isLoggedIn = Boolean(localStorage.getItem('token'));

  !isLoggedIn && history.push('/');
  return isLoggedIn ? <Route path={path} component={component} /> : null;
};

export default ProtectedRoute;