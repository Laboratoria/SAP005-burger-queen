import React from 'react';
import { Route, Redirect } from 'react-router';

export const PrivateRoute = (props) => {
const isAuthenticated = () => {
  if (localStorage.getItem('token')) {
      return true;
  } else {
      return false;
  }
};
	return isAuthenticated() ? (
		<Route {...props} />
	) : (
		<Redirect to={{ pathname: '/', state: { from: props.location } }} />
	);
};