import React, { Fragment, useState } from 'react';
import Input from './Input';

function SignupPage() {
  // const apiURL = 'https://lab-api-bq.herokuapp.com';
  // const apiUsers = `${apiURL}/users`;
  // const apiAuth = `${apiURL}/auth`;

  // submitButton.addEventListener('click', (event) => {
  //   event.preventDefault();
  //   const signupNewWorker = new Request(apiUsers, {
  //     method: 'POST',
  //     body: {
  //       name: workerName.value,
  //       email: workerEmail.value,
  //       role: workerFunction,
  //       restaurant: 'Azmina',

  //     },
  //   });
  //   apiUsers.fetch();
  // });

  const [workerName, setWorkerName] = useState('');

  return (
    <Fragment>
      <form>
        <div>
          <p>Nome</p>
          {/* <input type="text" id="worker-name" /> */}
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
          <input type="email" id="worker-email" />
        </div>
        <div>
          <p>Função</p>
          <input type="radio" id="salon-input" value="salon" name="function" />
          <label htmlFor="salon-input">Salão</label>
          <br />
          <input type="radio" id="kitchen-input" value="kitchen" name="function" />
          <label htmlFor="kitchen-input">Cozinha</label>
        </div>
        <div>
          <p>Senha</p>
          <input type="password" />
        </div>
        <button type="submit" id="submit-form-button">Cadastrar</button>
      </form>
    </Fragment>
  );
}

export default SignupPage;
