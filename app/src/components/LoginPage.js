import React, { Fragment, useState } from 'react';
import Input from './Input';

function LoginPage() {
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  return (
    <Fragment>
      <form>
        <Input
          labelInputDiv='label-input-wrap'
          htmlFor='login-email'
          labelClassName='login-email-label'
          label='E-mail'
          required
          type='email'
          name='login-email'
          value={emailLogin}
          placeholder='Insira aqui seu e-mail'
          inputClassName='login-email-input'
          onChange={(event) => setEmailLogin(event.target.value)}
        />

        <Input
          labelInputDiv='label-input-wrap'
          htmlFor='login-password'
          labelClassName='login-password-label'
          label='Senha'
          required
          type='password'
          name='login-password'
          value={passwordLogin}
          placeholder='Insira aqui sua senha'
          inputClassName='login-password-input'
          onChange={(event) => setPasswordLogin(event.target.value)}
        />
      </form>
    </Fragment>
  );
}

export default LoginPage;
