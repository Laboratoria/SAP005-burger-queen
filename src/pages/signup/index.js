import { Fragment, useState } from 'react'
import { createUser } from '../../services/index'
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button'
import Input from '../../components/InputText/InputText.js'
import Footer from '../../components/Footer/Footer'
import logo from '../../assets/logo.png'
import './signup.css'

export const SignUp = () => {

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [jobPosition, setJobPosition] = useState('')

  return (
    <Fragment>
      <header>
        <img className='logo' src={logo} alt='Logo Urban Bistro' />
      </header>
      <main>
        <form className='form-signup' onSubmit={createUser}>
          <label htmlFor='userName' className='label'>Nome<span className='required'>*</span></label><br />
          <Input
            required
            name='userName'
            className='input-signup'
            type='text'
            placeholder='Digite seu nome'
            value={userName}
            onChange={
              (event) => {
                setUserName(event.target.value)
              }
            }
          /><br />
          <label htmlFor='userEmail' className='label'>E-mail<span className='required'>*</span></label><br />
          <Input
            required
            name='userEmail'
            className='input-signup'
            type='email'
            placeholder='Digite seu email'
            value={userEmail}
            onChange={
              (event) => {
                setUserEmail(event.target.value)
              }
            }
          />
          <p className='label'>Função<span className='required'>*</span></p>
          <div>
            <label htmlFor='kitchen' className='radio-label'>Cozinha</label>
            <Input
              required
              name='jobPosition'
              className='radio-option'
              id='kitchen'
              type='radio'
              value='kitchen'
              onChange={
                (event) => {
                  setJobPosition(event.target.value)
                  console.log(jobPosition)
                }
              }
            />
            <label htmlFor='restaurant-hall' className='radio-label'>Salão</label>
            <Input
              required
              name='jobPosition'
              className='radio-option'
              id='restaurant-hall'
              type='radio'
              value='restaurant-hall'
              onChange={
                (event) => {
                  setJobPosition(event.target.value)
                }
              }
            />
          </div><br />
          <label htmlFor='userPassword' className='label'>Senha<span className='required'>*</span></label><br />
          <Input
            required
            name='userPassword'
            className='input-signup'
            type='password'
            placeholder='Digite uma senha mínimo 6 caracteres'
            minLength='6'
            value={userPassword}
            onChange={
              (event) => {
                setUserPassword(event.target.value)
              }
            }
          /><br />
          <Button
            name='Cadastrar'
            className='btn-signup'
            type='submit'
            onClick={
              async (event) => {
                event.preventDefault()
                const response = await createUser(
                  userName,
                  userEmail,
                  userPassword,
                  jobPosition
                )
                console.log(response)
              }
            }
          />
        </form>
        <p className='question-signup'>Já tem uma conta? <br /><Link className='link-to-login' to='/'>Entrar</Link></p>
      </main>
      <Footer />
    </Fragment>
  )
}
