import React, { Fragment } from 'react'


export default function ListOrderItems({
  classNameItemContainer,
  classNameItemQuantity,
  itemQuantity,
  classNameItemName,
  itemName,
  classNameBreak
}) {
  return (
    <Fragment>
      <section className={classNameItemContainer}>
        <p className={classNameItemQuantity}>{itemQuantity}x</p>
        <p className={classNameItemName}>{itemName}</p>
        <hr className={classNameBreak} />
      </section>
    </Fragment>
  )
}