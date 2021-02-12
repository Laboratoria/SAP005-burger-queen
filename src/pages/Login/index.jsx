
import React from "react";
import logo from "../../img/logo.gif";
import Container from "../../components/main";
import Footer from "../../components/footer.js";

const Login = () => {
  return <>
    <Container>
      <img src={logo} alt="logo" />
      <div className="inputs-container">
        <form>
          <label for="login">Login:
            <input type="text" placeholder="email@email.com" />
          </label>
          <label for="password">Password:
            <input type="password" placeholder="Password" />
          </label>
          <label for="team">Team:
            <select onChange={(event) => { console.log(event); }} defaultValue='Team work'>
              <option disabled>Team work</option>
              <option value='Hall'>Hall</option>
              <option value='Kitchen'>Kitchen</option>
            </select>
          </label>
            <input type="submit" value="SIGN IN" />
        </form>
      </div>
    </Container>
    <Footer />
  </>;
};
export default Login;