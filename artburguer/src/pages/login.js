import { React, useState } from "react";
import logo from "../img/hamburgernovo.png";
import "../App.css";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { Link, useHistory } from "react-router-dom";
import Routes from "../router";


const AppLogin = () => {
  <Routes />;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const rota = useHistory();

  const salaoRota = () => {
    rota.push("./cozinha");
  };

  function login(event) {
    let canLogin = false;
    let emailOk = false;
    let passwordOk = false;

    if (email.length === 0) {
      alert("Email está em branco!");
    } else {
      emailOk = true;
    }

    if (password.length === 0) {
      alert("Password deve ser preenchido!");
    } else {
      passwordOk = true;
    }

    if (emailOk === true && passwordOk === true) {
      canLogin = true;
    }

    if (canLogin === true) {
      event.preventDefault();
      fetch("https://lab-api-bq.herokuapp.com/auth", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${email}&password=${password}`,
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          if (json.role === " salao") {
            salaoRota();
          }
        });
    }
  }
  return (
    <MDBRow>
      <MDBCol md="12">
        <form>
          <img src={logo} className="App-logo" alt="logo" />

          <div className="App-formInput">
            <MDBInput
              label="Email *"
              icon="envelope"
              group
              type="email"
              validate
              error="wrong"
              success="right"
              onChange={(event) => setEmail(event.target.value)}
            />
            <MDBInput
              label="Senha *"
              icon="lock"
              group
              type="password"
              validate
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>


          <div className="text-center py-4 mt-3 ">
            <MDBBtn
              className="App-btn"
              color="orange"
              type="submit"
              onClick={login}
            >
              Efetue login
            </MDBBtn>
          </div>



          <div>
            <p className="App-funcionario">Funcionário novo?</p>
          </div>
          <div className="App-cadaster">
            <Link to="/register">Cadastre-se</Link>
          </div>
        </form>

        <div>
          <MDBContainer className="App-footerlogin">
            &copy; {new Date().getFullYear()} Projeto desenvolvido por:
            <a href="https://github.com/KarineFrontelli/" target="_blank">
              Karine Frontelli
            </a>
            e
            <a href="https://github.com/rebecaCanesin" target="_blank">
              Rebeca Canesin
            </a>
          </MDBContainer>
        </div>
      </MDBCol>
    </MDBRow>
  );
};
export default AppLogin;
