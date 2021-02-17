import { Fragment, useState } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
//import Navbar from '../Navbar/Navbar'
//import './clientInfo.css'

export default function ClientInfo() {

  const [clientName, setClientName] = useState('')
  const [tableNumber, setTableNumber] = useState('')

  return (
    <Fragment>
      {/*<header>
        <Navbar />
      </header>*/}
      <main>
        <form className='form-client-info'>
          <label htmlFor='clientName' className='label'>Nome<span className='required'> *</span></label><br />
          <Input
            inputRequired
            inputName='clientName'
            inputClassName='input-client-inf'
            inputType='text'
            inputPlaceholder='Digite o nome do cliente'
            inputValue={clientName}
            inputOnChange={
              (event) => {
                setClientName(event.target.value)
              }
            }
          /><br />
          <label htmlFor='tableNumber' className='label'>Mesa<span className='required'> *</span></label><br />
          <Input
            inputRequired
            inputName='tableNumber'
            inputClassName='input-client-inf'
            inputType='number'
            inputPlaceholder='Digite o número da mesa'
            inputValue={tableNumber}
            inputOnChange={
              (event) => {
                setTableNumber(event.target.value)
              }
            }
          /><br />
          <Button
            name='Abrir Comanda'
            type='submit'
            onClick={
              (event) => {
                event.preventDefault()
              }
            }
          />
        </form>
      </main>
    </Fragment>
  )
}