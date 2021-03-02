import React, { Fragment } from 'react'
import { FaUserAlt } from 'react-icons/fa';
import ListOrderItems from '../list-order-items/list-order-items'
import Button from '../button/button'
import './order-info.css'

export default function OrderInfo({
  tableNumber,
  clientName,
  buttonNameStatus,
  onClickStatus,
  onClickAddStatus,
  buttonNameAddStatus,
  orderItems
}) {
  return (
    <Fragment>
      <section className='container-order-info'>
        <h1 className='order-table-number'>Mesa: {tableNumber}</h1>
        <h2 className='order-client-name'><FaUserAlt className='icon-client' />{clientName}</h2>
        <div className='container-btn-order-info'>
          <Button
            name={buttonNameStatus}
            className='btn-order-info'
            type='button'
            onClick={onClickStatus}
          />
        </div>
        <main className='container-list-products'>
          {orderItems.map((item, index) => {
            return (
              <ListOrderItems
                itemName={item.name}
                itemQuantity={item.qtd}
              />
            )
          }
          )}
        </main>
        <div className='container-btn-order-info'>
          <Button
            name={buttonNameAddStatus}
            className='btn-order-info'
            type='button'
            onClick={onClickAddStatus}
          />
        </div>
      </section>
    </Fragment>
  )
}