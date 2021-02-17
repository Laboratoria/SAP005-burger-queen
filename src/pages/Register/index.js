import { React, useState } from "react";
import "./register.css";
import { useHistory } from "react-router-dom";
import {
  MdPerson,
  MdEmail,
  MdLock,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import Footer from "../../components/Footer/Footer";
import Logo from "../../components/Logo/Logo";

function Register() {
  const history = useHistory();

  const routerConfirm = () => {
    history.push("/confirm");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [show, setShow] = useState(false);
  const [role, setRole] = useState("");

  function registre(event) {
    let canRegister = false;
    let nameOk = false;
    let emailOk = false;
    let passwordOk = false;

    if (name.length === 0) {
      alert("Nome deve conter um valor!");
    } else {
      nameOk = true;
    }

    if (password !== passwordConfirmation) {
      alert("Password não estão iguais!");
    } else {
      passwordOk = true;
    }

    if (nameOk === true && emailOk === true && passwordOk === true) {
      canRegister = true;
    }

    if (canRegister === true) {
      event.preventDefault();

      fetch("https://lab-api-bq.herokuapp.com/users/", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${email}&password=${password}&role=${role}&restaurant=LaBurger&name=${name}`,
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.id !== null) {
            routerConfirm();
          }
          setName("");
          setEmail("");
          setPassword("");
          setRole("");
        });
    }

    const handleClick = (e) => {
      e.preventDefault();
      setShow(!show);
    };

    return (
      <>
        <div className="register-page">
          <Logo />
          <div className="right">
            <h1>Cadastre-se</h1>

            <div className="register-name">
              <MdPerson />
              <input
                type="name"
                placeholder="Nome"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="register-email">
              <MdEmail />
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="register-password">
              <MdLock />
              <input
                type={show ? "text" : "password"}
                placeholder="Senha"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="eye">
                {show ? (
                  <MdVisibility size={20} onClick={handleClick} />
                ) : (
                  <MdVisibilityOff size={20} onClick={handleClick} />
                )}
              </div>
            </div>

            <div className="register-re-password">
              <MdLock />
              <input
                type={show ? "text" : "password"}
                placeholder="Confirme sua senha"
                required
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
              <div className="eye">
                {show ? (
                  <MdVisibility size={20} onClick={handleClick} />
                ) : (
                  <MdVisibilityOff size={20} onClick={handleClick} />
                )}
              </div>
            </div>

            <div className="register-function">
              <select
                value={role}
                onChange={(event) => setRole(event.target.value)}
              >
                <option>Setor:</option>
                <option value="Cozinha">Cozinha</option>
                <option value="Salão">Salão</option>
              </select>
            </div>

            <div className="register-btn">
              <button type="submit" onClick={Register}>
                Registrar
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
export default Register;
