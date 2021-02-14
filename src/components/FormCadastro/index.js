import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const FormCadastro = () => {
  const [userInfo, setUser] = useState({ 'restaurant': 'Burguer Beef' });
  let history = useHistory();


  const handleSubmit = (event) => {
    event.preventDefault();
    const requestOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo)
    };

    /*fetch('https://lab-api-bq.herokuapp.com/users', requestOption)
      .then(response => response.json())
      .then(data => {
        if(data.role === 'salao'){
          history.push('/AnotarPedidos');
        } else {
          history.push('/PedidosAFazer')
        }
      });*/
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

      <button type='submit' value='enviar' className='btn-cadastrar' onClick={(event) => handleSubmit(event)
      }><Link to='/'>CADASTRAR</Link></button>
    </form>
  )
};

export default FormCadastro;