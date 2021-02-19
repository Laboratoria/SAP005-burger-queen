import React from 'react';
import Logo from '../../components/MainLogo/index.js';
import LoginForm from './LoginForm.js';
import style from './index.css';


function Login() {
    return(        
        <div className={style.Conteiner}>
            <div>
                <Logo className={style.MainLogo}/>
            </div>            
            <div>
                <h2>Login</h2>
                <LoginForm className={style.LoginForm}/>
            </div>
        </div>
    );    
}
export default Login;