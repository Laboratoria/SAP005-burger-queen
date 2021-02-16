import React from 'react';
import '../App.css';
import './LoginForm.css';
import {useForm} from 'react-hook-form'


function LoginForm() {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
    console.log(data)
};

    return (
        <div className='loginForm-container'>
            <form className='loginForm-content-form' onSubmit={handleSubmit(onSubmit)}>
                <input type='text'
                placeholder='Email' 
                name='email' 
                ref={register({required: true})}/>
                {errors.email && <p>Email Invalido</p>}
                <input 
                type='password' 
                placeholder='Password' 
                name='password' 
                ref={register({required: true, minLength: 8})}
                />
                <input type='submit' />
                {errors.password && <p>Senha Invalida</p>}
            </form>
        </div>

    );
}
    export default LoginForm;