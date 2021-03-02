import React, { Fragment } from 'react'
import OrderInfo from '../order-info/order-info'
import './add-status-order.css'

export default function AddStatusOrder({
  statusTitle,
}) {
  return (
    <Fragment>
      <section>
        <h1 className='title-add-status'>{statusTitle}</h1>
        <OrderInfo
          tableNumber=''
          clientName=''
          buttonNameStatus=''
          onClickStatus=''
          buttonNameAddStatus=''
          onClickAddStatus=''
        />
      </section>
    </Fragment>
  )
}