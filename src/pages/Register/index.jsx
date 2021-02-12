import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.gif";
import Footer from "../../components/footer.js";

const userData = {
  name: '',
  lastName: '',
  email: '',
  role: '',
  password: '',
  confirmPassword: '',
  token: '',
}

const createUser = (email, password, role, name) => {
  fetch('https://lab-api-bq.herokuapp.com/users/', {
    method: 'POST',
    headers: { 'accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `email=${email}&password=${password}&role=${role}&restaurant=Burgerlicious&name=${name}`
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      alert('Usuário cadastrado com sucesso!');
    })
}

const Register = () => {
  const [user, setUser] = useState(userData);

  useEffect(() => {
    setUser({ ...user, completeName: user.name + '' + user.lastName })
  }, [user.name, user.lastName])

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser(user.email, user.password, user.role, user.completeName);
    //limpar os inputs depois | refatorar o código setUser('')
  }
  return (
    <>
      <p><Link to="/Login">BACK</Link></p>

      <img src={logo} alt="logo" />

      <form>
        <label>
          Name:
          <input type='text' value={user.name} onChange={(event) => { setUser({ ...user, name: event.target.value }) }} />
        </label>
        <label>
          Last name:
          <input type='text' value={user.lastName} onChange={(event) => { setUser({ ...user, lastName: event.target.value }) }} />
        </label>
        <label>
          Email:
          <input type='email' value={user.email} onChange={(event) => { setUser({ ...user, email: event.target.value }) }} />
        </label>
        <label>
          Password:
          <input type='password' value={user.password} onChange={(event) => { setUser({ ...user, password: event.target.value }) }} />
        </label>
        <label>
          Confirm password:
          <input type='password' value={user.confirmPassword} onChange={(event) => { setUser({ ...user, confirmPassword: event.target.value }) }} />
        </label>

        <label>
          Team:
          <select onChange={(event) => { setUser({ ...user, role: event.target.value }) }} defaultValue='Team work'>
            <option disabled>Team work</option>
            <option value='Hall'>Hall</option>
            <option value='Kitchen'>Kitchen</option>
          </select>
        </label>

        <button type='submit' value='' onClick={(event) => {
          if (user.password === user.confirmPassword) { handleSubmit(event) }
          else {
            alert('Senha erro')
          }
        }}> SIGN UP </button>
      </form>

      <Footer />
    </>
  );
};

export default Register;