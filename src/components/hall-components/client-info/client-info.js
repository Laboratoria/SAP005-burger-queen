import { Fragment, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { openOrder } from '../../../services/services'
import Button from '../../generic-components/button/button'
import Input from '../../generic-components/input/input'
import Navbar from '../../generic-components/navbar/navbar'
import './client-info.css'

export default function ClientInfo() {

  const [clientName, setClientName] = useState('')
  const [tableNumber, setTableNumber] = useState('')

  const history = useHistory()

  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <form className='form-client-info' onSubmit={openOrder}>

          <label htmlFor='clientName' className='label-client-info'>Nome<span className='required'> *</span></label><br />
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

          <label htmlFor='tableNumber' className='label-client-info'>Mesa<span className='required'> *</span></label><br />
          <Input
            inputRequired
            inputName='tableNumber'
            inputClassName='input-client-inf'
            inputType='number'
            inputMin='1'
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
            className='btn-order'
            type='submit'
            onClick={
              async (event) => {
                event.preventDefault()
                {/*await openOrder(
                  clientName,
                  tableNumber,
                )*/}
                if (clientName === null || clientName === undefined || clientName === '') {
                } else if (tableNumber === null || tableNumber === undefined || tableNumber === '') {
                  console.log('Insira o número da mesa')
                } else {
                  localStorage.setItem('clientName', clientName)
                  localStorage.setItem('tableNumber', tableNumber)
                  history.push('/new-order')
                }

              }
            }
          />

        </form>
      </main>
    </Fragment>
  )
}
