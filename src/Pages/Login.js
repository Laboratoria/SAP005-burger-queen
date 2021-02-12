import React, {useState} from 'react';



function Login() {

  function loginAuth(email, password){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    let urlencoded = new URLSearchParams();
    urlencoded.append("email", `${email}`);
    urlencoded.append("password", `${password}`);

  const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
  };

  fetch("https://lab-api-bq.herokuapp.com/auth", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    loginAuth (email, password)
    console.log(loginAuth);
  }

  return(
    <form>
        <label>
          Email:
          <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Password:
          <input type="text" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <input type="submit" value="Enviar" onClick={(event) => handleSubmit(event)}/>
      </form>
  )
  
}

export default Login;
