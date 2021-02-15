import { Fragment, useState } from 'react'
import { createUser } from '../../services/index'
import Button from '../../components/Button/Button'
import Input from '../../components/InputText/InputText.js'
import Footer from '../../components/Footer/Footer'

export const SignUp = () => {

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [jobPosition, setJobPosition] = useState('')

  return (
    <Fragment>
      <main>
        <form onSubmit={createUser}>
          <label htmlFor='userName' className='label'>Nome<span className='required'>*</span></label><br />
          <Input
            required
            name='userName'
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
            type='email'
            placeholder='Digite seu email'
            value={userEmail}
            onChange={
              (event) => {
                setUserEmail(event.target.value)
              }
            }
          />
          <p>Função<span className='required'>*</span></p>
          <label htmlFor='kitchen' className='radio-btn'>Cozinha</label>
          <Input
            required
            name='jobPosition'
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
          <label htmlFor='restaurant-hall' className='radio-btn'>Salão</label>
          <Input
            required
            name='jobPosition'
            id='restaurant-hall'
            type='radio'
            value='restaurant-hall'
            onChange={
              (event) => {
                setJobPosition(event.target.value)
              }
            }
          /><br />
          <label htmlFor='userPassword' className='label'>Senha<span className='required'>*</span></label><br />
          <Input
            required
            name='userPassword'
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
      </main>
      <Footer />
    </Fragment>
  )
}
