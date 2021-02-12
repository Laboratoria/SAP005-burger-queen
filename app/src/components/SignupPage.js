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
  const [workerPassword, setWorkerPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Fragment>
      <form>
        <div>
          <p>Nome</p>
          <Input
            name="workerName"
            placeholder="Digite seu nome"
            value={workerName}
            onChange={(event) => {
              setWorkerName(event.target.value);
              console.log(workerName);
            }}
          />
        </div>
        <div>
          <p>E-mail</p>
          <Input
            name="workerEmail"
            placeholder="Digite seu email"
            value={workerEmail}
            onChange={(event) => {
              setWorkerEmail(event.target.value);
              console.log(setWorkerEmail);
            }}
          />
      </div>
        <div>
          <p>Função</p>
          <Input
            type="radio"
            id="salon-input"
            value="salon"
            name="function"
            required
            checked={workerRole === 'salon'}
            onChange={(event) => {
              setWorkerRole(event.target.value);
            }}
          />
          <label htmlFor="salon-input">Salão</label>
          <br />
          <Input
            type="radio"
            id="kitchen-input"
            value="kitchen"
            name="function"
            required
            checked={workerRole === 'kitchen'}
            onChange={(event) => {
              setWorkerRole(event.target.value);
            }}
          />
          <label htmlFor="kitchen-input">Cozinha</label>
        </div>
        <div>
          <p>Senha</p>
          <Input
            type="password"
            required
            value={workerPassword}
            onChange={(event) => {
              setWorkerPassword(event.target.value);
            }}
          />
        </div>
        <div>
          <p>Confirmar Senha</p>
          <Input
            type="password"
            required
            value={workerPassword}
            onChange={(event) => {
              setWorkerPassword(event.target.value);
            }}
          />
        </div>
        <Button
          type="submit"
          className="submit-form-button"
          buttonText="Cadastrar"
          onClick={(event) => {
            console.log('clicou');
            handleSubmit(event);
          }}
        />
      </form>
    </Fragment>
  );
}
