
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";
import Container from "../../components/main";
import Footer from "../../components/footer.js";

const Login = () => {
  return <>
    <Container>
       <div className="inputs-container">
       <Logo />
        <form>
          <label>Login:
            <input type="text" placeholder="email@email.com" />
          </label>
          <label>Password:
            <input type="password" placeholder="Password" />
          </label>
          <label>Team:
            <select onChange={(event) => { console.log(event); }} defaultValue='Team work'>
              <option disabled>Team work</option>
              <option value='Hall'>Hall</option>
              <option value='Kitchen'>Kitchen</option>
            </select>
          </label>
          <button type='submit' value='' onClick={(event) => {console.log(event);}}> SIGN UP </button>
            <p>Do not have an account?<span><Link to="/Register">Register</Link></span></p>
        </form>
      </div>
    </Container>
    <Footer />
  </>;
};
export default Login;