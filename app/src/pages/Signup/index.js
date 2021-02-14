/* eslint-disable no-console */
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-horizontal.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

export default function Signup() {
  const apiURL = 'https://lab-api-bq.herokuapp.com';
  const apiUsers = `${apiURL}/users`;
  const [workerName, setWorkerName] = useState('');
  const [workerEmail, setWorkerEmail] = useState('');
  const [workerRole, setWorkerRole] = useState('');
  const [workerPassword, setWorkerPassword] = useState('');
  // const [workerConfirmPassword, setWorkerConfirmPassword] = useState('');

  const registerUser = (event) => {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: workerName,
        email: workerEmail,
        role: workerRole,
        restaurant: 'hamburgueria-ipe',
        password: workerPassword,
      }),
    };

    fetch(apiUsers, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <Fragment>
      <header className='signup-header'>
        <h1><img className='logo-signup' src={logo} alt='Logo Hamburgueria Ipê' /></h1>
        <h2 className='signup-subtitle'>Cadastro</h2>
      </header>

      <form onSubmit={registerUser}>
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
          inputPlaceholder='Digite a senha'
          inputClassName='signup-input-password'
          inputOnChange={(event) => setWorkerPassword(event.target.value)}
        />

        {/* <Input
          divWrapClassName='label-input-wrap'
          labelHtmlFor='signup-input-password'
          labelClassName='signup-label'
          labelText='Confirmar senha'
          inputRequired
          inputType='password'
          inputName='signup-input-password'
          inputPlaceholder='Digite a senha novamente'
          inputClassName='signup-input-password'
          inputOnChange={(event) => setWorkerConfirmPassword(event.target.value)}
        /> */}

        <Button
          type='submit'
          className='submit-form-button'
          buttonText='Cadastrar'
        />
      </form>

      <Link to="/">
        <Button
          type='button'
          className='back-button'
          buttonText='Voltar'
        />
      </Link>

      <Footer />
    </Fragment>
  );
}
