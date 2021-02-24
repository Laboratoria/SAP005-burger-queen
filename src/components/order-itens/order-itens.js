import React, { Fragment } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import { FiPlusSquare } from 'react-icons/fi'
import { FiMinusSquare } from 'react-icons/fi'
import './order-itens.css'

export default function OrderItens({
  classNameContainer,
  classNameOrderItens,
  classNameNumber
}) {
  return (
    <Fragment>
      <div className={classNameContainer} className='teste'>
        <p className={classNameOrderItens}></p>
        <FiMinusSquare className='icon-order-itens' />
        <p className={classNameNumber}></p>
        <FiPlusSquare className='icon-order-itens' />
        <FaEdit className='icon-order-itens' />
        <FaTrashAlt className='icon-order-itens' />
      </div>
    </Fragment>
  )
}