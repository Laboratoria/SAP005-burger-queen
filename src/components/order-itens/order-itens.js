import React, { Fragment } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { FiPlusSquare } from 'react-icons/fi'
import { FiMinusSquare } from 'react-icons/fi'
import './order-itens.css'

export default function OrderItens({
  classNameContainer,
  classNameOrderItens,
  classNameNumber,
  classNamePrice,
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
        <div className={classNameContainer + ' teste'}>
          <p className={classNameOrderItens}>{name}</p>
          <p className={classNamePrice}>{price}</p>
          <FiMinusSquare id={id} onClick={minus} className='icon-order-itens' />
          <p className={classNameNumber}>{quantity}</p>
          <FiPlusSquare id={id} onClick={plus} className='icon-order-itens' />
          <FaEdit className='icon-order-itens' />
          <FaTrashAlt id={id} onClick={remove} className='icon-order-itens' />
        </div>
      }

    </Fragment>
  )
}