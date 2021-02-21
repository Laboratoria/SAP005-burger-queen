import { Fragment, useState } from 'react'
import { createUser } from '../../services/index'
import { Link, useHistory } from 'react-router-dom';
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

  const history = useHistory()

  return (
    <Fragment>
      <header>
        <img className='logo' src={logo} alt='Logo Urban Bistro' />
      </header>
      <main>
        <form className='form-signup' onSubmit={createUser}>

          <label htmlFor='userName' className='label-signup'>Nome<span className='required'> *</span></label>
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
          />

          <label htmlFor='userEmail' className='label-signup'>E-mail<span className='required'> *</span></label>
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

          <label htmlFor='userPassword' className='label-signup'>Senha<span className='required'> *</span></label>
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
          />

          <p className='label-signup'>Qual setor você trabalha?<span className='required'> *</span></p>
          <div>

            <div class="container">
              <div class="radio-tile-group">
                <div class="input-container">
                  <Input
                    inputRequired
                    inputId='kitchen'
                    inputClassName="radio-button"
                    inputType="radio"
                    inputName="radio"
                    inputValue='kitchen'
                    inputOnChange={
                      (event) => {
                        setJobPosition(event.target.value)
                        console.log(jobPosition)
                      }
                    }
                  />
                  <div class="radio-tile">
                    <label htmlFor='kitchen' className="radio-tile-label">Cozinha</label>
                  </div>
                </div>
                <div class="input-container">
                  <Input
                    inputRequired
                    inputId="hall"
                    inputClassName="radio-button"
                    inputType="radio"
                    inputName="radio"
                    inputValue='hall'
                    inputOnChange={
                      (event) => {
                        setJobPosition(event.target.value)
                      }
                    }
                  />
                  <div class="radio-tile">
                    <label htmlFor='hall' class="radio-tile-label">Salão</label>
                  </div>
                </div>
              </div>
            </div>
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

                localStorage.setItem('userName', response.client_name)
                localStorage.setItem('userToken', response.token)
                localStorage.setItem('userRole', response.role)

                if (localStorage.getItem('userToken') !== null) {
                  history.push('/')
                }
                else {
                  console.log('não cadastrado')
                }
              }
            }
          />
        </form>
        <p className='question-signup'>Já tem uma conta? <br /><Link className='link-to-login' to='/'>Entre</Link></p>
      </main>
      <Footer />
    </Fragment>
  )
}
