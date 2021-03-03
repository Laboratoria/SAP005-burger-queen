import React from "react";
import { Route, useHistory } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }) => {
  const history = useHistory();
  const token = localStorage.getItem("token")
  if (!token || token === "") {
    history.push("/login");
    return null;
  }

  return <Route {...rest}>{children}</Route>;
};

export default ProtectedRoute;
