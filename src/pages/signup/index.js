import { Fragment, useState } from "react"
import Button from "../../components/Button"
import Input from "../../components/Input"

const SignUp = () => {

  const [userName, setUserName] = useState()
  const [userEmail, setUserEmail] = useState()
  const [userPassword, setUserPassword] = useState()
  const [jobPosition, setJobPosition] = useState()
    
  return(
    <Fragment>
      <form>
          <label htmlFor='userName' className='label'>Nome<span className="required"> *</span></label>
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
          <label htmlFor='userEmail' className='label'>Email<span className="required"> *</span></label>
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
        <label htmlFor='userPassword' className='label'>Senha<span className="required"> *</span></label>
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
          <p>Função:</p>
          <label className='radio-btn'>Cozinha<span className="required"> *</span></label>
          <Input
              required
              type='radio' 
              value={jobPosition}
              onChange={(event) => {
                  setJobPosition(event.target.value)
              }
            }
            />
          <label className='radio-btn'>Salão<span className="required"> *</span></label>
          <Input
              required
              type='radio' 
              value={jobPosition}
              onChange={(event) => {
                  setJobPosition(event.target.value)
              }
            } 
            />
          <Button
              type='submit'
              handleClick={creatNewUser}
          />
      </form>
    </Fragment>
  )
}
