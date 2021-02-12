import React { useState } from 'react'
import './register.css';

import { MdPerson, MdEmail, MdLock, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useState } from 'react';

function Register() {
    const  [email, setEmail] = useState ("")
    const  [password, setPassword] = useState ("")
    const  [passwordConfirmation, setPasswordConfirmatio] = useState ("")
    const  [show, setShow] = useState (false)

const handleClick = (e) => {
    e.preventDefault()
    setShow(!show)
}

    }
    return (
        <div className="register-page">
        <div className="left">
        <img src="../img/logo.jpg" width="175px" height="175px" alt="Logo da marca LaBurguer"/>
        </div> 
        <div className="right">
            <h1>Registre-se</h1>

            <div className="input-in-line">
            <MdPerson/>
                <input type="text" placeholder="Nome"/>
            </div>

            <div className="input-in-line">
            <MdEmail/>
                <input type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}/>
            </div>

            <div className="input-in-line">
            <MdLock/>
                <input type={show ? "text" : "password"}
                placeholder="Senha"
                value={password}
                onChange={e => setPassword(e.target.value)}/>
                <div className="registe-eye">
                    { show ? (
                    <MDFVisibility
                    size={20}
                    onClick={handleClick}
                    />   
                    ) : (
                    <MdVisibilityOff
                    size={20}
                    onClick={handleClick}F/>    
                    )}
                </div>
            </div>

            <div className="input-in-line">
            <MdLock/>
                <input type="text" 
                placeholder="Confirme sua senha"
                value={passwordConfirmation}
                onChange={e => setPasswordConfirmatio(e.target.value)}/>
                <div className="registe-eye">
                { show ? (
                    <MDFVisibility
                        size={20}
                        onClick={handleClick}
                        />   
                    ) : (
                    <MdVisibilityOff
                    size={20}
                    onClick={handleClick}F/>    
                    )}
                </div>
            </div>

            <button type="submit">Registrar</button>
            
        </div>           
    </div>    
)

export default Register;