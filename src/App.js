import './App.css';
import logo from './img/logo.gif';

function App() {

  const handleSubmit = (event) => {
    event.preventDefault();
    //limpar os inputs depois
    //no burgerlicious salvar na API
  }

  return (
    <>
      <img src={logo} alt="logo" />
      <form>
        <label>
          Name:
          <input type='text' value='' />
        </label>
        <label>
          Last name:
          <input type='text' value='' />
        </label>
        <label>
          Email:
          <input type='email' value='' />
        </label>
        <label>
          Password:
          <input type='password' value='' />
        </label>
        <label>
          Confirm password:
          <input type='password' value='' />
        </label>
        <label>
          Team:
          <select>
            <option value="Hall">Hall</option>
            <option value="Kitchen">Kitchen</option>
          </select>
        </label>
        <button type='submit' value='' onClick={(event) => handleSubmit(event)}> SIGN UP </button>
      </form>
    </>
  );
}

export default App;

//botão de voltar e componente footer (:

// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// const Home = lazy(() => import('./routes/Home'));
// const About = lazy(() => import('./routes/About'));

// const App = () => (
//   <Router>
//     <Suspense fallback={<div>Loading...</div>}>
//       <Switch>
//         <Route exact path="/" component={Home}/>
//         <Route path="/about" component={About}/>
//       </Switch>
//     </Suspense>
//   </Router>
// );