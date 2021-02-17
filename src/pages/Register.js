import '../style/login.css'
import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import Cozinha from '../images/Ícones/chef.png'
import Salao from '../images/Ícones/bandeja.png'
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import ErrorModal from '../components/ModalError';

function Register () {
    const [signupInfo, setSignupInfo] = useState({"restaurant":"acka burguer"});
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    let history = useHistory();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
  
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
                setIsModalVisible(true);
                setErrorMessage(`${data.message}`);
            } else {
                localStorage.setItem("token", data.token);
                localStorage.setItem("userId", data.id);
                history.push(`/${data.role}`);
            }
          });
    }

    console.log(signupInfo)
  
    return (
      <div>
        {isModalVisible ? (<ErrorModal onClose={() => setIsModalVisible(false)}>{errorMessage}</ErrorModal>) : null}
        <section className="login">
            <Logo />
            <form className="form-login" onSubmit={handleSubmit}>
                <input
                    className="form-input"
                    type="text" 
                    placeholder="Nome Completo"
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

                {password.length >= 6 && confirmPassword.length > 0 && password !== confirmPassword && <p className="password-error">As senhas devem ser iguais!</p>}

                <p className="form-text">Em qual setor você trabalha?</p>
                <section className="form-label">
                    <input id="cozinha"
                        type="radio"
                        value="cozinha"
                        name="role"
                        required
                        onChange={(event) => setSignupInfo({ ...signupInfo, "role": event.target.value })} 
                    />
                    <label for="cozinha">
                        <img className="form-img-radio" src={Cozinha}/>
                        Cozinha
                    </label>
            
                    <input id="salao"
                        type="radio"
                        value="salao"
                        name="role"
                        required
                        onChange={(event) => setSignupInfo({ ...signupInfo, "role": event.target.value })} 
                    />
                    <label for="salao">
                        <img className="form-img-radio" src={Salao}/>
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
                    <Link className="form-router" to="/">Faça login!</Link>
                </p>
            </form>
    
        </section>
        <Footer />
      </div>
    );
}
export default Register;