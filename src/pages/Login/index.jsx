import React, { useState } from "react";
import { Link } from "react-router-dom";
import RequestOptions from "../../components/objectAndfunctions/requestOptions";
import { CallAPI } from "../../services/api"
import Logo from "../../components/logo";
import Container from "../../components/main";
import Footer from "../../components/footer.js";
import "./../../style.css";

const modelsData = {
  parameters:"auth",
  apiURL: "https://lab-api-bq.herokuapp.com/",
  name: "",
  email: "",
  role: "",
};

const loginPage = (props) => {
  const { email , password, parameters,apiURL} = props;
  const api = apiURL+parameters;
  const body = `email=${email}&password=${password}`;
  const method = RequestOptions.post(body);

  CallAPI(api,method)
    .then((json) => {
      console.log(json);
      alert("Acessou")})
    .then(console.log("object"))
};

const Login = () => {
  const [user, setUser] = useState(modelsData);

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
            <label htmlFor="login">
              Login:
              <input
                type="text"
                value={user.email}
                onChange={(event) => {
                  setUser({ ...user, email: event.target.value });
                }}
                placeholder="email@email.com"
              />
            </label>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                value={user.password}
                onChange={(event) => {
                  setUser({ ...user, password: event.target.value });
                }}
                placeholder="Password"
              />
            </label>
            <label htmlFor="team">
              Team:
              <select
                className="select-style"
                onChange={(event) => {
                  setUser({ ...user, role: event.target.value });
                }}
                defaultValue="Team work"
              >
                <option disabled>Team work</option>
                <option value="Hall">Hall</option>
                <option value="Kitchen">Kitchen</option>
              </select>
            </label>
            <button
              type="submit"
              value=""
              onClick={(event) => {
                handleSubmit(event);
              }}
            >
              {" "}
              SIGN UP{" "}
            </button>
            <p>
              Do not have an account?
              <span>
                <Link to="/Register">Register</Link>
              </span>
            </p>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
