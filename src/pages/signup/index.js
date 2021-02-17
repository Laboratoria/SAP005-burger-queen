import { Fragment, useState } from 'react'
import { createUser } from '../../services/index'
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input.js'
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
            inputRequired
            inputName='userName'
            inputClassName='input-signup'
            inputType='text'
            inputPlaceholder='Digite seu nome'
            inputValue={userName}
            inputOnChange={
              (event) => {
                setUserName(event.target.value)
              }
            }
          /><br />

          <label htmlFor='userEmail' className='label'>E-mail<span className='required'>*</span></label><br />
          <Input
            inputRequired
            inputName='userEmail'
            inputClassName='input-signup'
            inputType='email'
            inputPlaceholder='Digite seu email'
            inputValue={userEmail}
            inputOnChange={
              (event) => {
                setUserEmail(event.target.value)
              }
            }
          />

          <label htmlFor='userPassword' className='label'>Senha<span className='required'>*</span></label><br />
          <Input
            inputRequired
            inputName='userPassword'
            inputClassName='input-signup'
            inputType='password'
            inputPlaceholder='Digite uma senha mínimo 6 caracteres'
            inputMinLength='6'
            inputValue={userPassword}
            inputOnChange={
              (event) => {
                setUserPassword(event.target.value)
              }
            }
          /><br />

          <p className='label'>Função<span className='required'>*</span></p>
          <div>
            <label htmlFor='kitchen' className='radio-label'>Cozinha</label>
            <Input
              inputRequired
              inputName='jobPosition'
              inputClassName='radio-option'
              inputId='kitchen'
              inputType='radio'
              inputValue='kitchen'
              inputChecked='kitchen'
              inputOnChange={
                (event) => {
                  setJobPosition(event.target.value)
                  console.log(jobPosition)
                }
              }
            />
            <label htmlFor='hall' className='radio-label'>Salão</label>
            <Input
              inputRequired
              inputName='jobPosition'
              inputClassName='radio-option'
              inputId='hall'
              inputType='radio'
              inputValue='hall'
              inputChecked='hall'
              inputOnChange={
                (event) => {
                  setJobPosition(event.target.value)
                }
              }
            />
          </div><br />

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
