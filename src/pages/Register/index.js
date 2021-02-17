import { React, useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import { MdPerson, MdEmail, MdLock, MdVisibility, MdVisibilityOff} from 'react-icons/md';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [show, setShow] = useState(false);
  const [role, setRole] = useState("");

  function registre(event) {
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
      .then((json) => console.log(json));
  }

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <div className="register-page">
      <div className="left">
	  	<img src="img/logo.png" alt="logo-app" />
      </div>
      <div className="right">
        <h1>Cadastre-se</h1>

        <div className="input-in-line">
          <MdPerson />
          <input
            type="name"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-in-line">
          <MdEmail />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-in-line">
          <MdLock />
          <input
            type={show ? "text" : "password"}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="registe-eye">
            {show ? (
              <MdVisibility size={20} onClick={handleClick} />
            ) : (
              <MdVisibilityOff size={20} onClick={handleClick} />
            )}
          </div>
        </div>
        <div className="input-in-line">
          <MdLock />
          <input
            type="text"
            placeholder="Confirme sua senha"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <div className="registe-eye">
            {show ? (
              <MdVisibility size={20} onClick={handleClick} />
            ) : (
              <MdVisibilityOff size={20} onClick={handleClick} />
            )}
          </div>
        </div>
      </div>

      <select value={role} onChange={(event) => setRole(event.target.value)}>
        <option>Função</option>
        <option value="Cozinha">Cozinha</option>
        <option value="Salão">Salão</option>
      </select>
      <div>
        <button type="submit" onClick={registre}>
          Registrar
        </button>
      </div>
      <p>
        <Link to="/">Ir para a página login</Link>
      </p>
    </div>
  );
};
export default Register;
