import React, { Fragment } from 'react'
import './list-order-items.css'

export default function ListOrderItems({
  classNameItemContainer,
  classNameItemName,
  itemName,
  classNameBreak,
  classNameItemQuantity,
  itemQuantity
}) {
  return (
    <Fragment>
      <section className={classNameItemContainer}>
        <p className={classNameItemQuantity}>{itemQuantity}</p>
        <p className={classNameItemName}>{itemName}</p>
        <hr className={classNameBreak} />
      </section>
    </Fragment>
  )
}