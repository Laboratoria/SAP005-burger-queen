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
  quantity,
  plus,
  minus,
  name,
  price,
  id
}) {
  return (
    <Fragment>
      <div className={classNameContainer, 'teste'}>
        <p className={classNameOrderItens}>{name} {price}</p>
        <FiMinusSquare value={id} onClick={minus} className='icon-order-itens' />
        <p className={classNameNumber}>{quantity}</p>
        <FiPlusSquare value={id} onClick={plus} className='icon-order-itens' />
        <FaEdit className='icon-order-itens' />
        <FaTrashAlt className='icon-order-itens' />
      </div>
    </Fragment>
  )
}