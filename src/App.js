import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Navbar from './components/NavbarStorage/Navbar';
import signUp  from './pages/signup';
import Hall from './pages/hall';
import Kitchen from './pages/kitchen';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/hall" exact component={Hall} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={signUp}/>
          <Route path="/kitchen" exact component={Kitchen}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
