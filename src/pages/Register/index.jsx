import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RequestOptions from "../../components/object/requestOptions";
import AllModelsObject from "../../components/object/models";
import Footer from "../../components/footer.js";
import Logo from "../../components/logo";
import CallAPI from "../../services/api";


const userData = AllModelsObject.authAndUsers;

const createUser = (props) => {
  const { email, password, role, name, users } = props;
  const body = `email=${email}&password=${password}&role=${role}&restaurant=Burgerlicious&name=${name}`;
  const method = RequestOptions.post(body);

  CallAPI(users, method)
    .then((json) => {
      console.log(json);
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
    createUser(user);
    //limpar os inputs depois | refatorar o código setUser('')
  }
  return (
    <>
      <div className="inputs-container">
        <div className="container-logo-btn">
          <p className="back-button"><Link to="/">BACK</Link></p>
          <Logo />
        </div>
        <form>
          <label>
            Name:
          <input type='text' value={user.name} onChange={(event) => { setUser({ ...user, name: event.target.value }) }} placeholder="Name" />
          </label>
          <label>
            Last name:
          <input type='text' value={user.lastName} onChange={(event) => { setUser({ ...user, lastName: event.target.value }) }} placeholder="Last name" />
          </label>
          <label>
            Email:
          <input type='email' value={user.email} onChange={(event) => { setUser({ ...user, email: event.target.value }) }} placeholder="email@email.com" />
          </label>
          <label>
            Password:
          <input type='password' value={user.password} onChange={(event) => { setUser({ ...user, password: event.target.value }) }} placeholder="Password" />
          </label>
          <label>
            Confirm password:
          <input type='password' value={user.confirmPassword} onChange={(event) => { setUser({ ...user, confirmPassword: event.target.value }) }} placeholder="Password" />
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