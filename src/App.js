import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Body from './Layout'
import Login from './pages/login';

function App() {
  return (
    <Router>
      <Body>
        <Switch>
          <Route exect path='/' component={Login}/>
        </Switch>
      </Body>
    </Router>
  );
}

export default App;
