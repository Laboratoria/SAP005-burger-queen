import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import signUp  from './pages/signup';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/hall" exact  />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={signUp}/>
          <Route path="/kitchen" exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
