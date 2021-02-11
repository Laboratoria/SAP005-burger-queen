import { React, useState}  from "react";
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div>
            <header>
                <nav>
                    <Link to='/'>Login</Link>
                    <Link to='/register'>Cadastro</Link>
                    <Link to='/orders'>Pedidos</Link>
                </nav>
            </header>
           
            <h1>Login</h1>
            <Link to='/register'>Cadastre-se</Link>
            
        </div>
    )
    
    
};

export default Login

