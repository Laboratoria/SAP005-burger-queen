import React from 'react'
import './register.css';

const Register = () => {
    return (
        <div className="register-page">
        <div className="left">
        <img src="../img/logo.jpg" width="175px" height="175px" alt="Logo da marca LaBurguer"/>
        </div> 
        <div className="right">
            <h1>Registre-se</h1>

            <div className="input-in-line">
                
                <input type="text" placeholder="Nome"/>
            </div>

            <div className="input-in-line">
                
                <input type="text" placeholder="Digite um email"/>
            </div>

            <div className="input-in-line">
                
                <input type="text" placeholder="Digite sua senha"/>
            </div>

            <div className="input-in-line">
                
                <input type="text" placeholder="cConfirme sua senha"/>
            </div>

            <button type="submit">Registrar</button>
            
        </div>           
    </div>    
)
}

export default Register;