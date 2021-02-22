import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Logo from '../../Components/Logo';
import styles from './login.module.css';
import MailIcon from '../Icons/MailIcon.png';
import PadlockIcon from '../Icons/PadlockIcon.png';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const routerLogin = () => {
    history.push("/Hall");
  };

  const handleClick = (event) => {
    event.preventDefault();

    fetch("https://lab-api-bq.herokuapp.com/auth", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
        
      },
      body: JSON.stringify({email,password})
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        routerLogin();
      });
  
  };


  return (    
    <div className={styles.conteiner}>                       
      <div className={styles.firstContent}>                  
        <Logo/>          
      </div>

      <div className={styles.secondContent}> 
        <h2 className={styles.title}>LOGIN</h2>   

        <form className={styles.form} onSubmit={handleClick}>          
          <label htmlFor="email" className={styles.labelInput}>      
              {/* <img src={MailIcon} className={styles.icon}/>           */}
            <input
              className={styles.input}
              type="email"
              value={email}
              placeholder="email"
              onChange={(event) => setEmail(event.target.value)}
              autocomplete="on"
              required
            />
          </label>

          <label htmlFor="password" className={styles.labelInput}>
              {/* <img src={PadlockIcon} className={styles.icon}/>  */}
            <input
              className={styles.input}
              type="password"
              value={password}
              placeholder="senha"
              onChange={(event) => setPassword(event.target.value)}
              autocomplete="off"
              required
            />
          </label>

          <button className={styles.button} type="submit" id="button" onClick={handleClick}>
            Entrar
          </button>

          <p className={styles.noRegister}>Não tem uma conta?</p>
            <Link to="/Register" className={styles.register}>Cadastrar</Link>
        
        </form>
      </div>
    </div>
  );
}
export default Login;
