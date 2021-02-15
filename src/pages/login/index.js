import React from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react'
import { authUser } from '../../services/index'
import Button from '../../components/Button/Button'
import Input from '../../components/InputText/InputText'
import Footer from '../../components/Footer/Footer'
import logo from '../../assets/logo.png'

export const Login = () => {

  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  return (
    <Fragment>
      <header>
        <img className='logo' src={logo} alt='Logo Urban Bistro' />
      </header>
      <form className='form-login'>
        <label htmlFor='userEmail' className='label'>E-mail<span className='required'> *</span></label><br />
        <Input
          required
          name='userEmail'
          className='input-login'
          type='email'
          placeholder='Digite seu email'
          value={userEmail}
          onChange={
            (event) => {
              setUserEmail(event.target.value)
            }
          }
        /><br />
        <label htmlFor='userPassword' className='label'>Senha<span className='required'> *</span></label><br />
        <Input
          required
          name='userPassword'
          className='input-login'
          type='email'
          placeholder='Digite uma senha'
          value={userPassword}
          onChange={
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
        <p className='question-login'>Funcionário novo? <br /><Link className='link-to-signup' to='/signup'>Cadastrar-se</Link></p>
      </form>
      <Footer />
    </Fragment>
  )
};
