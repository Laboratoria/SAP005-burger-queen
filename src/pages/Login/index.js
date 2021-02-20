import { Link, useHistory } from 'react-router-dom';
import React, {useState} from 'react';
import './Login.css';

export const Login = () => {
    
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const direcion = useHistory();

    const directMenu = () => {
    direcion.push('/menu')
    }
  
    const directKitchen = () => {
      direcion.push('/kitchen')
    }
  

    const loginTeste = () => {
        fetch('https://lab-api-bq.herokuapp.com/auth', {
          body:`email=${email}&password=${pass}` ,
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          
          },
          
        )
          .then((response) => response.json())
          .then((data) => {
            setEmail('')
            setPass('')
            console.log(data)
            localStorage.setItem('token', data.token); 
            if(data.role === "waiter"){
              directMenu();
            }
            else if(data.role === "cooker"){
              directKitchen();
            }


          })
      }
    return (
      <>
       <section className="login">
      <form className="login-form">
        <input  className="inputf" type="email" placeholder="Informe seu email"
        value={email} onChange={e=> setEmail(e.target.value)}
        />
        <input className="inputf" type="password" placeholder="Informe sua senha"
        value={pass} onChange={e=> setPass(e.target.value)}
        />
        <button className="button-log" type='submit' onClick={(e) => {
        e.preventDefault();
        loginTeste();
        }}>Logar</button>
        <p className="text">
                Não tem uma conta? 
        <Link className="link-register" to="/register">Registre-se</Link>
        </p>
        </form>
        </section>
      </>
    );
};