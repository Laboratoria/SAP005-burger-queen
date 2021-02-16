import { alertMessage } from '../components/errors/errors.js'

const CallAPI = async (url, method) => {
  try {
    const response = await fetch(url, method);
    const data = await response.json();
    return data;
  } 
  catch {
    alertMessage('Ops! Something went wrong. Please, try again.');
  }
};

export default CallAPI;