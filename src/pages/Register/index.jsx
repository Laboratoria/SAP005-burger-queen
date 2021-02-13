import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer.js";
import Logo from "../../components/logo";

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
      <div className="inputs-container">
        <Logo />
        <form>
          <label>
            Name:
          <input type='text' value={user.name} onChange={(event) => { setUser({ ...user, name: event.target.value }) }} placeholder="Name"/>
          </label>
          <label>
            Last name:
          <input type='text' value={user.lastName} onChange={(event) => { setUser({ ...user, lastName: event.target.value }) }} placeholder="Last name"/>
          </label>
          <label>
            Email:
          <input type='email' value={user.email} onChange={(event) => { setUser({ ...user, email: event.target.value }) }} placeholder="email@email.com"/>
          </label>
          <label>
            Password:
          <input type='password' value={user.password} onChange={(event) => { setUser({ ...user, password: event.target.value }) }} placeholder="Password"/>
          </label>
          <label>
            Confirm password:
          <input type='password' value={user.confirmPassword} onChange={(event) => { setUser({ ...user, confirmPassword: event.target.value }) }} placeholder="Password"/>
          </label>

          <label>
            Team:
          <select className="select-style" onChange={(event) => { setUser({ ...user, role: event.target.value }) }} defaultValue='Team work'>
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
      </div>
      <Footer />
    </>
  );
};

export default Register;