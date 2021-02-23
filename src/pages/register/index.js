import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from '../../Components/Logo';
import styles from './register.module.css';
// import mailIcon from '../Icons/MailIcon.png';
// import padlockIcon from '../Icons/PadlockIcon.png';
// import userIcon from '../Icons/UserIcon.png';
// import hallIcon from '../Icons/HallIcon.png';
// import kitchenIcon from '../Icons/KitchenIcon.png';

const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");


  const routerHall = () => {
    history.push("/hall");
  };
  const routerKitchen = () => {
    history.push("/Kitchen");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://lab-api-bq.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: `&email=${email}&password=${password}&role=${role}& $restaurant:Botin Burger=&name=${name}`,
      body: JSON.stringify({
        email,
        password,
        role,
        restaurant: "Botin Burger",
        name,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        if (json.role === "hall") {
          routerHall();
        }
        if (json.role === "kitchen") {
          routerKitchen();
        }
      });
  };

  return (
    <div className={styles.conteiner}>  
      <div className={styles.firstContent}>                  
        <Logo/>          
      </div>

      <div className={styles.secondContent}>
        <h2 className={styles.title}>CADASTRO</h2>  

        <form className={styles.form} onSubmit={handleSubmit}> 
          <label htmlFor="nome" className={styles.labelInput}>
              {/* <img src={UserIcon} className={styles.icon}/>   */}
            <input
              className={styles.input}
              id="name"
              type="text"
              value={name}
              placeholder="Nome"
              onChange={(event) => setName(event.target.value)}  
              required          
            />
          </label>

          <label htmlFor="email" className={styles.labelInput}>
              {/* <img src={MailIcon} className={styles.icon}/>   */}
            <input
              className={styles.input}
              id="email"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}  
              required            
            />
          </label>
            
          <label htmlFor="password" className={styles.labelInput}>
              {/* <img src={PadlockIcon} className={styles.icon}/>   */}
            <input
            className={styles.input}
            id="password"
            type="password"                
            value={password}
            placeholder="Senha"
            onChange={(event) => setPassword(event.target.value)}   
            required       
            />
          </label>

          <p className={styles.sector}>Por Favor marque o seu setor:</p>
          <label htmlFor="kitchen" className={styles.labelSector}>
            {/* <img src={KitchenIcon} className={styles.icon}/> */}
            <input 
              className={styles.sectorSelect} 
              type="radio" 
              id="kitchen" 
              name="radio" 
              value={(role, "kitchen")}
              onClick={(e) => setRole(e.target.value)}
              required
            />
            Cozinha
          </label>

          <label htmlFor="Hall" className={styles.labelSector}>
            {/* <img src={HallIcon} className={styles.icon}/> */}
            <input 
              className={styles.sectorSelect} 
              type="radio" 
              id="Hall"
              name="radio" 
              value={(role, "Hall")}
              onClick={(e) => setRole(e.target.value)}
              required
            />            
            Hall
          </label>

          <button className={styles.button} type="submit" id="button" onClick={handleSubmit}>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
