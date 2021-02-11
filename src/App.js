import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { Login } from './pages/Login';
import { Register } from './pages/Register';

export const App = () => {
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path='/register' component={Register} />
    </Switch>
  </BrowserRouter>
  )
};

export default App;



