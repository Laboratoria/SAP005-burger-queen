const verifyErrorCode = {
  '400': 'Invalid email and/or password. Please, try again.',
  '401': 'User not authenticated. Please, try again.',
  '403': 'Email already in use at another restaurant. Please, try with a different e-mail.',
  '404': 'User not found. Please, try again.',
};

export const getError = (err) => {
  const errorMessage = verifyErrorCode[err];
  if (!errorMessage) {
    errorMessage = 'Ops! Something went wrong. Please, try again.';
  }
  printMessageError(errorMessage);
};

export const printMessageError = (message) => {
  const elementError = document.createElement('p');
  const errorMessage = document.createTextNode(message);
  elementError.appendChild(errorMessage);
  document.getElementById('error-login').innerHTML = '';
  document.getElementById('error-login').appendChild(elementError);
};
