import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Kitchen } from './pages/Kitchen';
import { Menu } from './pages/Menu';

export const App = () => {
  return (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/menu' component={Menu}/>
      <Route path='/kitchen' component={Kitchen}/>
    </Switch>
  </BrowserRouter>
  )
};

export default App;



