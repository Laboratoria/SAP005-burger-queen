import React, { Fragment } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import ListOrderItems from '../list-order-items/list-order-items'
import Button from '../button/button'
import './order-card.css'

export default function OrderCard({
  tableNumber,
  clientName,
  status,
  buttonNameAddStatus,
  onClickAddStatus,
  orderItems
}) {
  return (
    <Fragment>
      <section className='container-order-info'>
        <div className='container-text'>
          <h1 className='order-table-number'>Mesa: {tableNumber}</h1>
          <h2 className='order-client-name'><FaUserAlt className='icon-client' /> {clientName}</h2>
        </div>
        <p className='status-title'>{status}</p>
        <main className='container-list-products'>
          {orderItems.map((item, index) => {
            return (
              <ListOrderItems
                itemName={item.name}
                itemQuantity={item.qtd}
                classNameBreak='hr-break'
                key={`order-item-${index}`}
              />
            )
          }
          )}
        </main>
        <Button
          name={buttonNameAddStatus}
          className='btn-order-info'
          type='button'
          onClick={onClickAddStatus}
        />
      </section>
    </Fragment>
  )
}
