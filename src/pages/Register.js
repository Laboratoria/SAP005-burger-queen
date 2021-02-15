import '../style/login.css'
import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import Logo from '../images/Logo.png'
import Cozinha from '../images/Ícones/chef.png'
import Salao from '../images/Ícones/bandeja.png'

function Register () {
    const [signupInfo, setSignupInfo] = useState({"restaurant":"acka burguer"});
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    let history = useHistory();
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupInfo)
      };
  
      fetch('https://lab-api-bq.herokuapp.com/users', requestOptions)
        .then(response => response.json())
        .then(data => {
            if(data.message !== undefined){
                localStorage.setItem("token", data.token);
                localStorage.setItem("userId", data.id);
                alert(data.message);
            } else {
                history.push(`/${data.role}`);
            }
          });
    }
  
    return (
      <div>
        <section className="login">
            <img className="logo" src={Logo} />
            <form className="form-login" onSubmit={handleSubmit}>
                <input
                    className="form-input"
                    type="text" 
                    placeholder="Nome"
                    required
                    onChange={(event) => setSignupInfo({ ...signupInfo, "name": event.target.value })} 
                />
                
                <input
                    className="form-input"
                    type="text" 
                    placeholder="E-mail"
                    required
                    onChange={(event) => setSignupInfo({ ...signupInfo, "email": event.target.value })} 
                />
        
                <input
                    className="form-input"
                    type="password" 
                    placeholder="Senha"
                    required
                    onChange={(event) => setPassword(event.target.value)} 
                />

                {password.length > 0 && password.length < 6 && <p className="password-error">Sua senha deve ter no mínimo 6 characteres!</p>}

                <input
                    className="form-input"
                    type="password" 
                    placeholder="Confirmar senha"
                    required
                    onChange={(event) => {
                        setConfirmPassword(event.target.value);
                        if(password === confirmPassword){
                            setSignupInfo({ ...signupInfo, "password": password })
                        }
                    }} 
                />

                {password.length >= 6 && confirmPassword > 0 && password !== confirmPassword && <p className="password-error">As senhas devem ser iguais!</p>}

                <p className="form-text">Em qual setor você trabalha?</p>
                <section className="form-label">
                    <label className="form-label-radio">
                        <img className="form-img-radio" src={Cozinha}/>
                        <input className="form-input-radio"
                        type="radio"
                        value="cozinha"
                        name="role"
                        required
                        onChange={(event) => setSignupInfo({ ...signupInfo, "role": event.target.value })} 
                        />
                        Cozinha
                    </label>
            
                    <label className="form-label-radio">
                        <img className="form-img-radio" src={Salao}/>
                        <input className="form-input-radio"
                        type="radio"
                        value="salao"
                        name="role"
                        required
                        onChange={(event) => setSignupInfo({ ...signupInfo, "role": event.target.value })} 
                        />
                        Salão
                    </label>
                </section>
        
                <button
                    className="form-button" 
                    type="submit" 
                    value="Submit"
                >
                    REGISTRAR-SE
                </button>
                <p className="form-text">
                    Já tem uma conta? 
                    <Link className="form-router" to="/login">Faça login!</Link>
                </p>
            </form>
    
          </section>
          <footer>
            <p className="footer-text">Projeto desenvolvido por
            <a className="footer-link" href="" alt="Ana Clara GitHub"> Ana Clara</a> e
            <a className="footer-link" href="" alt="Kauana GitHub"> Kauana </a> 
            durante o Bootcamp da
            <a className="footer-link" href="" alt="Site Laboratória"> Laboratória</a>
            .</p>
        </footer>
      </div>
    );
}
export default Register;