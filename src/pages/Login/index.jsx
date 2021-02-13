import React, { useState } from "react";
import { Link } from "react-router-dom";
import RequestOptions from "../../components/objectAndfunctions/requestOptions";
import Logo from "../../components/logo";
import Container from "../../components/main";
import Footer from "../../components/footer.js";
import "./../../style.css";

const userData = {
  name: "",
  email: "",
  role: "",
};

const loginPage = (email, password) => {
  const body = `email=${email}&password=${password}`;
  const method = RequestOptions.post(body);

  fetch("https://lab-api-bq.herokuapp.com/auth", method)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      alert("Acessou");
    });
};

const Login = () => {
  const [user, setUser] = useState(userData);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    loginPage(user.email, user.password);
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
