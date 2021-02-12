
import React from "react";
import Container from "../../components/main";
import Footer from "../../components/footer.js";

const Login = () => {
  return <>
    <Container>
      <div className="inputs-container">
        <form>
          <label for="login">Login:</label>
          <input type="text" placeholder="email@email.com" />
          <label for="password">Password:</label>
          <input type="password" placeholder="Password" />
          <label for="team">Team:</label>
          <input type="text" placeholder="Select your work team" />
          <input type="submit" value="SIGN IN"/>
        </form>
      </div>
    </Container>
    <Footer/>
  </>;
};
export default Login;