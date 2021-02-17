import { Fragment, useState } from 'react'
import { openOrder } from '../../services'
import Button from '../Button/Button'
import Input from '../InputText/InputText'
import Body from '../Template/Template'
//import './clientInfo.css'

export default function ClientInfo() {

  const [clientName, setClientName] = useState('')
  const [tableNumber, setTableNumber] = useState('')

  return (
    <Fragment>
      <main>
      <Body>
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
              async (event) => {
                event.preventDefault()
                const response = await openOrder(
                  clientName,
                  tableNumber
                )
                console.log(response)
              }
            }
          />
        </form>
      </Body>
      </main>
    </Fragment>
  )
}