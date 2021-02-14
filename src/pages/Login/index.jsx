import React, { useState } from "react";
import { Link } from "react-router-dom";
import RequestOptions from "../../components/object/requestOptions";
import AllModelsObject from "../../components/object/models";
import Logo from "../../components/logo";
import Container from "../../components/main";
import Footer from "../../components/footer.js";
import CallAPI from "../../services/api";


const userData = AllModelsObject.authAndUsers;

const loginPage = (props) => {
  const { email, password, auth } = props;
  const body = `email=${email}&password=${password}`;
  const method = RequestOptions.post(body);

  CallAPI(auth, method)
    .then((json) => {
      console.log(json);
      alert("Acessou")
    })
    .then(console.log("object"))
};

const Login = () => {
  const [user, setUser] = useState(userData);

  const handleSubmit = (event) => {
    event.preventDefault();
    loginPage(user);
  };

  return (
    <>
      <Container>
        <div className="inputs-container">
          <Logo />
          <form>
            <label>Login:
              <input type="text" value={user.email} onChange={(event) => { setUser({ ...user, email: event.target.value }); }}
                placeholder="email@email.com" required
              />
            </label>
            <label>Password:
              <input type="password" value={user.password} onChange={(event) => { setUser({ ...user, password: event.target.value }); }}
                placeholder="Password" required
              />
            </label>
            <button type="submit" value="" onSubmit={(event) => { handleSubmit(event); }}>
              SIGN IN
            </button>
            <p> Do not have an account? <span> <Link to="/Register">Register</Link> </span></p>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
