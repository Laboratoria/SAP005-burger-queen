import React from 'react';
import { useForm } from 'react-hook-form';
import '../App.css';
import './SignUpForm.css';
//import {useForm} from 'react-hook-form'


function SignUpForm() {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data =>{
        console.log(data)
    }
    return (
        <div className='signUpForm-container'>
            <form className='signUpForm-content-form' onSubmit={handleSubmit(onSubmit)}>
                <label>Nome</label>
                <input type='text'
                    name='name' 
                    ref={register({required: true, maxLength: 15, pattern: /^[A-Za-z]+$/i})}
                    />
                    {errors.name && <p>Nome invalido. Este campo deve ter até 15 caracters, sendo somente, letras</p>}
                <label>Sobrenome</label>
                <input type='text'
                    name='surname' 
                    ref={register({required: true, maxLength: 15, pattern: /^[A-Za-z]+$/i})}
                    />
                    {errors.surname && <p>Sobrenome invalido. Este campo deve ter até 15 caracters, sendo somente, letras</p>}
                <label>Senha</label>
                <input 
                    type='password' 
                    name='password' 
                    ref={register({required: true, minLength: 8})}
                    />
                    <input type='submit' />
                    {errors.password && <p>Senha Invalida</p>}
                {/*<label>Confirme a senha</label>
                <input 
                type='password' 
                name='passwordConfirm' 
                ref={register({required: true})}
                />
                <input type='submit' />
                {errors.passwordConfirm && <p>Senha Invalida</p>}*/}
                <label>Local</label>
                <select name="role" ref={register}>
                    <option value="kitchen">Cozinha</option>
                    <option value="hall">Salão</option>
                </select>
                <input type="submit" />
            </form>
        </div>

    );
}
    export default SignUpForm;