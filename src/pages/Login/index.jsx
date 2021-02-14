import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import RequestOptions from "../../components/object/requestOptions";
import AllModelsObject from "../../components/object/models";
import Logo from "../../components/logo";
import Container from "../../components/main";
import Footer from "../../components/footer.js";
import CallAPI from "../../services/api";


const userData = AllModelsObject.authAndUsers;

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState(userData);

  const loginPage = (props) => {
    const { email, password, auth } = props;
    const body = `email=${email}&password=${password}`;
    const method = RequestOptions.post(body);

    CallAPI(auth, method)
      .then((json) => {
        localStorage.setItem(`${json.id}`,`${json.token}`);
        console.log(json)
        if (json.code === 400) {
          alert(`Deu ruim! ${json.message}`)
        } else {
          history.push("/Home")
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
          <form>
            <label>Login:
              <input type="text" value={user.email} onChange={(event) => { setUser({ ...user, email: event.target.value }); }}
                placeholder="email@email.com"
              />
            </label>
            <label>Password:
              <input type="password" value={user.password} onChange={(event) => { setUser({ ...user, password: event.target.value }); }}
                placeholder="Password"
              />
            </label>
            <label>Team:
              <select className="select-style" onChange={(event) => { setUser({ ...user, role: event.target.value }); }} defaultValue="Team work">
                <option disabled>Team work</option>
                <option value="Hall">Hall</option>
                <option value="Kitchen">Kitchen</option>
              </select>
            </label>
            <button type="submit" value="" onClick={(event) => { handleSubmit(event); }}>
              {" "}SIGN UP{" "}
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
