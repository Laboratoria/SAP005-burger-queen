import React, { Fragment } from 'react'
import OrderCard from '../order-card/order-card'
import './order-info.css'

export default function OrderInfo({
  statusTitle,
  orders,
  nextStatus,
  onClickNextStatus
}) {
  return (
    <Fragment>
      <section className='container-order-status'>
        <h1 className='title-add-status'>{statusTitle}</h1>
        {orders.map((order, index) => {
          return (
            <OrderCard
              tableNumber={order.table}
              clientName={order.client_name}
              status={order.status}
              buttonNameAddStatus={nextStatus}
              onClickAddStatus={onClickNextStatus}
              orderItems={order.Products}
              key={`order-${index}`}
            />
          )
        }
        )}
      </section>
    </Fragment>
  )
}
