import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./Pages/Register";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Saloon from "./Pages/Saloon";
import Kitchen from "./Pages/Kitchen";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const isAuth = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    { ...rest }
    render={props => (
      isAuth() ? (
        <Component{...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
     )
    )}
  />
)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <PrivateRoute path="/saloon" component={Saloon} exact />
        <PrivateRoute path="/kitchen" component={Kitchen} exact />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
