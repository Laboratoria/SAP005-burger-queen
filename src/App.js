import './App.css';
import logo from './img/logo.gif';
import Footer from './components/footer.js'
import React, { useState, useEffect } from 'react';

const userData = {
  name: '',
  password: '',
  role: '',
  token: '',
}

const App = () => {
  // ver como a API constrói os usuários

  const [user, setUser] = useState(userData);
  const [completeName, setCompleteName] = useState('');

  useEffect(() => {
    setCompleteName(user.name + ' ' + user.lastName)
  }, [user.name, user.lastName])


  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Usuário cadastrado com sucesso!');
    console.log(user);
    //se senha estiver igual à confirmação da senha
    //limpar os inputs depois

    //no burgerlicious salvar na API
  }

  return (
    <>
      <button onClick={(event) => console.log(event, 'mudar a rota')}>BACK</button>
      <img src={logo} alt="logo" />
      <form>
        <p>
        {completeName}

        </p>
        <label>
          Name:
          <input type='text' value={user.name} onChange={(event) => {setUser({...user, name: event.target.value})}}/>
        </label>
        <label>
          Last name:
          <input type='text' value={user.lastName} onChange={(event) => {setUser({...user, lastName: event.target.value})}}/>
        </label>
        <label>
          Email:
          <input type='email' value={user.email} onChange={(event) => {setUser({...user, email: event.target.value})}}/>
        </label>
        <label>
          Password:
          <input type='password' value={user.password} onChange={(event) => {setUser({...user, password: event.target.value})}}/>
        </label>
        {/* <label>
          Confirm password:
          <input type='password' value='' onChange={(event) => {console.log(event.target.value)}}/>
        </label> */}
        <label>
          Team:
          <select onChange={(event) => {setUser({...user, role: event.target.value})}}>
            <option selected disabled>Team work</option>
            <option value='Hall'>Hall</option>
            <option value='Kitchen'>Kitchen</option>
          </select>
        </label>
        <button type='submit' value='' onClick={(event) => handleSubmit(event)}> SIGN UP </button>
      </form>
      <Footer />
    </>
  );
}

export default App;

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