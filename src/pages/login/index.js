import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'

export const Login = () => {

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  
  return(
    <Fragment>
      <form>
      <label htmlFor='userEmail' className='label'>E-mail<span className='required'> *</span></label><br />
          <Input
            required
            name='userEmail'
            type='email' 
            placeholder='Digite seu email'
            value={userEmail}
            onChange={(event) => {
                setUserEmail(event.target.value);
            }
          }
        /><br />
        <label htmlFor='userPassword' className='label'>Senha<span className='required'> *</span></label><br />
        <Input
            required
            name='userPassword'
            type='email' 
            placeholder='Digite uma senha'
            value={userPassword}
            onChange={(event) => {
                setUserPassword(event.target.value);
            }
          }
        /><br />
        <Button
            name='Entrar'
            type='submit'
            OnSubmit={(event) => {
              event.preventDefault();
            }
          }
        />  
        <p>Funcionário novo? <br /><Link to='/signup'>Cadastrar-se</Link></p>
      </form>
    </Fragment> 
  )
};
