/* eslint-disable no-console */
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function Login() {
  const apiURL = 'https://lab-api-bq.herokuapp.com';
  const apiAuth = `${apiURL}/auth`;
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  const authUser = (event) => {
    event.preventDefault();

    const authOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailLogin,
        password: passwordLogin,
      }),
    };

    fetch(apiAuth, authOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <Fragment>
      <form onSubmit={authUser}>
        <Input
          divWrap='label-input-wrap'
          labelHtmlFor='login-email'
          labelClassName='login-email-label'
          labelText='E-mail'
          inputRequired
          inputType='email'
          inputName='login-email'
          inputValue={emailLogin}
          inputPlaceholder='Insira aqui seu e-mail'
          inputClassName='login-email-input'
          inputOnChange={(event) => setEmailLogin(event.target.value)}
        />

        <Input
          divWrap='label-input-wrap'
          labelHtmlFor='login-password'
          labelClassName='login-password-label'
          labelText='Senha'
          inputRequired
          inputType='password'
          inputName='login-password'
          inputValue={passwordLogin}
          inputPlaceholder='Insira aqui sua senha'
          inputClassName='login-password-input'
          inputOnChange={(event) => setPasswordLogin(event.target.value)}
        />

        <Button
          type='submit'
          className='login-button'
          onClick={handleLogin()}
          buttonText='Entrar'
        />
      </form>

      <Link to="/cadastro">
        <Button
          type='button'
          className='back-button'
          buttonText='Cadastre-se'
        />
      </Link>
    </Fragment>
  );
}
