import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Menu } from './pages/Menu';

export const App = () => {
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/menu' exact component={Menu} />
    </Switch>
  </BrowserRouter>
  )
};

export default App;



