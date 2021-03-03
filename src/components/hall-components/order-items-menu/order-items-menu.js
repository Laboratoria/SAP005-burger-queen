import React, { Fragment } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { FiPlusSquare } from 'react-icons/fi'
import { FiMinusSquare } from 'react-icons/fi'

export default function OrderItens({
  classNameContainer,
  classNameOrderItens,
  classNameNumber,
  classNamePrice,
  classNameIcon,
  quantity,
  plus,
  minus,
  remove,
  name,
  price,
  id
}) {
  return (
    <Fragment>
      {name && price && id && minus && quantity && plus && remove &&
        <div className={classNameContainer}>
          <p className={classNameOrderItens}>{name}</p>
          <p className={classNamePrice}>R${price},00</p>
          <FiMinusSquare id={id} onClick={minus} className={classNameIcon} />
          <p className={classNameNumber}>{quantity}</p>
          <FiPlusSquare id={id} onClick={plus} className={classNameIcon} />
          <FaEdit className={classNameIcon} />
          <FaTrashAlt id={id} onClick={remove} className={classNameIcon} />
        </div>
      }
    </Fragment>
  )
}
