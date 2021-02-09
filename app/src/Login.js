import React, { Fragment } from 'react';

const apiURL = 'https://lab-api-bq.herokuapp.com';
const apiUsers = `${apiURL}/users`;
const apiAuth = `${apiURL}/auth`;

function LoginPage() {
  return (
    <Fragment>

    <div>
      <p>Nome</p>
      <input type="text"></input>
    </div>
    <div>

    </div>
    </Fragment>
  );
}

export default LoginPage;
