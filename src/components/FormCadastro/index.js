import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const FormCadastro = () => {
  const [userInfo, setUser] = useState({ restaurant: 'Burguer Beef' });
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://lab-api-bq.herokuapp.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.id !== null) {
          alert('Usuário criado com sucesso!');
          history.push('/');
        } else {
          alert('Algo deu errado, por favor confira os dados novamente')
        }
      })
      .catch((error) => {
        alert(error.message);
        history.push('/Cadastro');
      });
      
  }

  return (
    <form className='form-cadastro'>
      <label>
        Nome:
          <input type='text' name='nome' className='input-text' required onChange={(event) => setUser({ ...userInfo, 'name': event.target.value })
        } />
      </label>

      <label>
        E-mail:
          <input type='text' name='email' className='input-text' required onChange={(event) => setUser({ ...userInfo, 'email': event.target.value })
        } />
      </label>

      <label>
        Senha:
          <input type='password' name='senha' className='input-text' required onChange={(event) => setUser({ ...userInfo, 'password': event.target.value })
        } />
      </label>

      <section className='option-setor'>
        <p className='setor'>Setor:</p>
        <label>
          <input type='radio' value='cozinha' name='role' className='input-radio' required onChange={(event) => setUser({ ...userInfo, 'role': event.target.value })
          } />
            Cozinha
          </label>

        <label>
          <input type='radio' value='salao' name='role' className='input-radio' required onChange={(event) => setUser({ ...userInfo, 'role': event.target.value })
          } />
            Salão
          </label>
      </section>

      <button type='submit' value='enviar' className='btn-cadastrar' onClick={(event) => handleSubmit(event)}>CADASTRAR</button>
    </form>
  )
};

export default FormCadastro;
