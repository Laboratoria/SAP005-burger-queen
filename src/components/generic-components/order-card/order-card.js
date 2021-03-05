import React, { Fragment } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { BiTimer } from 'react-icons/bi'
import { getStatusDescription } from '../../../services/services'
import ListOrderItems from '../list-order-items/list-order-items'
import Button from '../button/button'
import './order-card.css'

export default function OrderCard({
  tableNumber,
  clientName,
  status,
  created,
  processed,
  showButton,
  buttonNameAddStatus,
  onClickAddStatus,
  orderItems,
  showTime
}) {
  return (
    <Fragment>
      <section className='container-order-info'>
        <div className='container-text'>
          <h1 className='order-table-number'>Mesa: {tableNumber}</h1>
          <h2 className='order-client-name'><FaUserAlt className='icon-client' /> {clientName}</h2>
        </div>
        <p className='status-title'>{getStatusDescription(status)}</p>
        <div className='container-time'>
          <BiTimer className={showTime ? 'timer-icon' : 'hide'} /><p className={showTime ? 'timer' : 'hide'}> {
            Math.ceil((new Date(processed) - new Date(created)) / 1000 / 60)
          } min</p>
        </div>
        <main className='container-list-products'>
          {orderItems.map((item, index) => {
            return (
              <ListOrderItems
                key={`order-item-${index}`}
                itemName={item.name}
                itemQuantity={item.qtd}
                itemFlavor={item.flavor}
                itemComplement={item.complement}
                classNameBreak='hr-break'

              />
            )
          }
          )}
        </main>
        <Button
          name={buttonNameAddStatus}
          className={showButton ? 'btn-order-info' : 'hide'}
          type='button'
          onClick={onClickAddStatus}
        />
      </section>
    </Fragment>
  )
}
