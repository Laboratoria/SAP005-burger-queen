/* eslint-disable no-console */
import React, { Fragment, useState } from 'react';
import Input from './Input';
import Button from './Button';

export default function SignupPage() {
  const apiURL = 'https://lab-api-bq.herokuapp.com/';
  const apiUsers = `${apiURL}/users`;
  const [workerName, setWorkerName] = useState('');
  const [workerEmail, setWorkerEmail] = useState('');
  const [workerRole, setWorkerRole] = useState('');
  // const [workerPassword, setWorkerPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Fragment>
      <form>
        <Input
          divWrapClassName='label-input-wrap'
          labelHtmlFor='signup-input-name'
          labelClassName='signup-label'
          labelText='Nome'
          inputRequired
          inputType='text'
          inputName='signup-input-name'
          inputValue={workerName}
          inputPlaceholder='Digite seu nome'
          inputClassName='signup-input-name'
          inputOnChange={(event) => setWorkerName(event.target.value)}
        />

        <Input
          divWrapClassName='label-input-wrap'
          labelHtmlFor='signup-input-email'
          labelClassName='signup-label'
          labelText='E-mail'
          inputRequired
          inputType='email'
          inputName='signup-input-email'
          inputValue={workerEmail}
          inputPlaceholder='Digite seu email'
          inputClassName='signup-input-email'
          inputOnChange={(event) => setWorkerEmail(event.target.value)}
        />

        <Input
          divWrapClassName='label-input-wrap'
          labelHtmlFor='role-hall'
          labelClassName='signup-label-radio'
          labelText='Salão'
          inputRequired
          inputType='radio'
          inputName='role-hall'
          inputValue='hall'
          inputChecked={workerRole === 'hall'}
          inputClassName='signup-input-role'
          inputOnChange={(event) => setWorkerRole(event.target.value)}
        />

        <Input
          divWrapClassName='label-input-wrap'
          labelHtmlFor='role-hall'
          labelClassName='signup-label-radio'
          labelText='Cozinha'
          inputRequired
          inputType='radio'
          inputName='role-hall'
          inputValue='kitchen'
          inputChecked={workerRole === 'kitchen'}
          inputClassName='signup-input-role'
          inputOnChange={(event) => setWorkerRole(event.target.value)}
        />

        <Input
          divWrapClassName='label-input-wrap'
          labelHtmlFor='signup-input-password'
          labelClassName='signup-label'
          labelText='Senha'
          inputRequired
          inputType='password'
          inputName='signup-input-password'
          inputPlaceholder='Digite sua senha'
          inputClassName='signup-input-password'
        />

        <Input
          divWrapClassName='label-input-wrap'
          labelHtmlFor='signup-input-password'
          labelClassName='signup-label'
          labelText='Senha'
          inputRequired
          inputType='password'
          inputName='signup-input-password'
          inputPlaceholder='Digite sua senha'
          inputClassName='signup-input-password'
        />

        <Button
          type='submit'
          className='submit-form-button'
          buttonText='Cadastrar'
          onClick={(event) => handleSubmit(event)}
        />
      </form>
    </Fragment >
  );
}
