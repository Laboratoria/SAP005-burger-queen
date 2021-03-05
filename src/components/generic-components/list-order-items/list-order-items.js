import React, { Fragment } from 'react'


export default function ListOrderItems({
  classNameItemContainer,
  classNameItemQuantity,
  itemQuantity,
  classNameItemName,
  itemName,
  classNameItemFlavor,
  itemFlavor,
  itemComplement,
  classNameItemComplement,
  classNameBreak
}) {
  return (
    <Fragment>
      <section className={classNameItemContainer}>
        <p className={classNameItemQuantity}>{itemQuantity}x</p>
        <p className={classNameItemName}>{itemName}</p>
        <p className={classNameItemFlavor}>{itemFlavor}</p>
        <p className={classNameItemComplement}>{itemComplement}</p>
        <hr className={classNameBreak} />
      </section>
    </Fragment>
  )
}