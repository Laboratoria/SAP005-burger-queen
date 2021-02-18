import React from 'react';
import '../App.css';
import './LoginForm.css';
import  {yupResolver}  from '@hookform/resolvers/yup';
import schema from './ValidationLogin';
import {useForm} from 'react-hook-form';
//import {Button} from './Button';


function LoginForm() {
        const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = ({email, password}) => {
    console.log(`Email: ${email}, password: ${password}`);
    alert('Sucesso, nenem');
    };

    return (
        <div className='loginForm-container'>
            <form className='loginForm-content-form' onSubmit={handleSubmit(onSubmit)}>
                {/*<header>
                    <img src={nosso logo principal} />
                    </header>*/}
                <label htmlFor='email'>Email</label>
                <input 
                    type='text'
                    id='email' 
                    name='email' 
                    ref={register}
                />
                {errors.email?.message}<br />
                <label htmlFor='password'>Senha</label>
                <input 
                    type='password' 
                    id='password'
                    name='password' 
                    ref={register} 
                />
                {errors.password?.message}<br />
                <input type='submit' />
                {/*<Button type='submit' buttonStyle='button-unClicked'>Entrar</Button>*/}
            </form>
        </div>

    );
}
    export default LoginForm;