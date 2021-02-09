import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Login(){
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      sendData();
    }
  })

  async function sendData() {
    const data = JSON.stringify ({...form})
    fetch('https://lab-api-bq.herokuapp.com/auth' , {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-Type' : 'application/json'
      },
      body: JSON.stringify({
        firstParan: 'email',
        secondParan: 'password',
      }).then (() => console.log('ok'))

    }
      )
  }

  function handleChange(event){
    setForm({
      ...form,
      [event.target.email] : event.target.value,
      [event.target.password] : event.target.value
    })
  }
  
  function validate (form) {
    let errors ={};
    if (!form.email){
      errors.email = '*Preencha com um email válido'
    }if (!form.password){
      errors.password = '*Senha invalida'
    }
  }
  function handSubmit (event) {
    event.preventDefault();
    setErrors(validate(form))
  }

    return (
      <div>
          <h1>Login</h1>
          <p>
            <Link to="/Registry">Registro</Link>
          </p>
          <p>
            <Link to="/Home">Salão</Link>
          </p>
          <p>
            <Link to="/Kitchen">Cozinha</Link>
          </p>
          <form onSubmit={e => handSubmit(e)}>

          <label for='email'></label>
          <input name='email' type='email' id='email' placeholder='Email'onChange={event => handleChange(event)}/>
          {errors.email && <p>{errors.email}</p>}

          <label for='password'></label>
          <input name='password' type='password' id='password' placeholder='Senha' onChange={event => handleChange(event)}/>
          {errors.password && <p>{errors.password}</p>}

          <button type='submit'>Entrar</button>
        </form>
          
      </div>
    );
  }
  
  export default Login;