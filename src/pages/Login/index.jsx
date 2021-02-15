import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import RequestOptions from "../../components/object/requestOptions";
import AllModelsObject from "../../components/object/models";
import Logo from "../../components/logo";
import Container from "../../components/main";
import Footer from "../../components/footer.js";
import CallAPI from "../../services/api";
import { getError } from "../../components/errors/errors.js";

const userData = AllModelsObject.authAndUsers;;

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState(userData);

  const loginPage = (props) => {
    const { email, password, auth } = props;
    const body = `email=${email}&password=${password}`;
    const method = RequestOptions.post(body);

    CallAPI(auth, method)
      .then((json) => {
        localStorage.setItem(`id`,`${json.id}`)
        localStorage.setItem(`name`,`${json.name}`)
        localStorage.setItem(`token`,`${json.token}`)
        
        if (json.code) {
          getError(json.code)
        }
        if (json.role === "hall") {
          history.push("/Hall")
        }
        if (json.role === "kitchen") {
          history.push("/Kitchen")
        }
      })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginPage(user);
  };

  return (
    <>
      <Container>
        <div className="inputs-container">
          <Logo />
          <form onSubmit={(event) => { handleSubmit(event) }}>
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
            <p id="error-login"></p>
            <button type="submit"> SIGN IN </button>
            <p> Do not have an account? <span> <Link to="/Register">Register</Link> </span></p>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
