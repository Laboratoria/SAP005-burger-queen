import React, { Fragment, useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function Login() {
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  const handleLogin = () => {

  };

  return (
    <Fragment>
      <form>
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
    </Fragment>
  );
}
