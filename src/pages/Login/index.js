import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react'
import { authUser } from '../../services/index'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Footer from '../../components/Footer/Footer'
import logo from '../../assets/logo.png'
import './login.css'

export const Login = () => {

  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  return (
    <Fragment>
      <header>
        <img className='logo' src={logo} alt='Logo Urban Bistro' />
      </header>
      <main>
        <form className='form-login'>

          <label htmlFor='userEmail' className='label'>E-mail<span className='required'> *</span></label><br />
          <Input
            inputRequired
            inputName='userEmail'
            inputClassName='input-login'
            inputType='email'
            placeholder='Digite seu email'
            inputValue={userEmail}
            inputOnChange={
              (event) => {
                setUserEmail(event.target.value)
              }
            }
          /><br />

          <label htmlFor='userPassword' className='label'>Senha<span className='required'> *</span></label><br />
          <Input
            inputRequired
            inputName='userPassword'
            inputClassName='input-login'
            inputType='email'
            placeholder='Digite uma senha'
            inputValue={userPassword}
            inputOnChange={
              (event) => {
                setUserPassword(event.target.value)
              }
            }
          /><br />

          <Button
            name='Entrar'
            className='btn-login'
            type='submit'
            onClick={
              async (event) => {
                event.preventDefault()
                const response = await authUser(
                  userEmail,
                  userPassword
                )
                console.log(response)
              }
            }
          />
        </form>
        <p className='question-login'>Funcionário novo?</p><br />
        <div className='btn-link'>
          <Link to='/signup' className='btn-link'>
            <Button
              name='Cadastre-se'
              className='btn-to-signup'
              type='button'
            />
          </Link>
        </div>
      </main>
      <Footer />
    </Fragment>
  )
};
