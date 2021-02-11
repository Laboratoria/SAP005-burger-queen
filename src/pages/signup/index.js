import { Fragment, useState } from "react"
import Button from "../../components/Button"
import Input from "../../components/Input"


export const SignUp = () => {

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [jobPosition, setJobPosition] = useState('')
    
  return(
    <Fragment>
      <form>
          <label htmlFor='userName' className='label'>Nome<span className="required">*</span></label>
          <Input
            required
            name='userName'
            type='text' 
            placeholder='Digite seu nome'
            value={userName}
            onChange={(event) => {
                setUserName(event.target.value)
            }
          }
          />
          <label htmlFor='userEmail' className='label'>Email<span className="required">*</span></label>
          <Input
            required
            name='userEmail'
            type='email' 
            placeholder='Digite seu email'
            value={userEmail}
            onChange={(event) => {
                setUserEmail(event.target.value)
            }
          }
          />
          <label htmlFor='userPassword' className='label'>Senha<span className="required">*</span></label>
          <Input
            required
            name='userPassword'
            type='email' 
            placeholder='Digite uma senha'
            value={userPassword}
            onChange={(event) => {
                setUserPassword(event.target.value)
            }
          }
          />
          <p>Função<span className="required">*</span></p>
          <label htmlFor='kitchen' className='radio-btn'>Cozinha</label>
          <Input
              required
              name='jobPosition'
              id='kitchen'
              type='radio' 
              checked={jobPosition === 'kitchen'}
              value='kitchen'
              onChange={(event) => {
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
              checked={jobPosition === 'restaurant-hall'}
              onChange={(event) => {
                  setJobPosition(event.target.value)
                  console.log(jobPosition)
              }
            }
            />
          <Button
              name='Confirmar Cadastro'
              value='Confirmar'
              type='submit'
              //handleClick={}
          />
      </form>
    </Fragment>
  )
}
