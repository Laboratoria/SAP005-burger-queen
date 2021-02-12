//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';



function App() {

  function register(email, password, role, restaurant, nome){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    let urlencoded = new URLSearchParams();
    urlencoded.append("email", `${email}`);
    urlencoded.append("password", `${password}`);
    urlencoded.append("role", `${role}`);
    urlencoded.append("restaurant", `${restaurant}`);
    urlencoded.append("name", `${nome}`);

  const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
  };

  fetch("https://lab-api-bq.herokuapp.com/users", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [restaurant, setRestaurant] = useState('');
  const [nome, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    register (email, password, role, restaurant, nome)
  }

  return(
    <form>
        <label>
          Email:
          <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Password:
          <input type="text" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <label>
          Role:
          <input type="text" value={role} onChange={(event) => setRole(event.target.value)} />
        </label>
        <label>
          Restaurant:
          <input type="text" value={restaurant} onChange={(event) => setRestaurant(event.target.value)} />
        </label>
        <label>
          Name:
          <input type="text" value={nome} onChange={(event) => setName(event.target.value)} />
        </label>
        <input type="submit" value="Enviar" onClick={(event) => handleSubmit(event)}/>
      </form>
  )
  
}

export default App;
