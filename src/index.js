import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes'


// import { isAuthenticated } from './pages/Login';

// const PrivateRoute = ({component: Component, ...rest }) => (
//     <Route 
//         {...rest}
//         render={(props) => {
//           isAuthenticated() === true ? (<Component { ...props} />) : (<Redirect to={{pathname: "/login", state: { from: props.location } }} />)
//         }}
//     />
// );

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
