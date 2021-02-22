import React, { Fragment } from 'react'
import { FaPlus } from 'react-icons/fa'
import './menu-itens.css'

export default function MenuItens({
  onClick,
  srcImg,
  altImg,
  productName,
  productPrice,
}) {
  return (
    <Fragment>

      <section onClick={onClick} className='product-section'>
        <img
          className='product-img'
          src={srcImg}
          alt={altImg}
        />
        <p className='product-name'>{productName}</p>
        <p className='product-price'>R$ {productPrice},00</p>
        <FaPlus className='icon-plus' />
      </section>

    </Fragment>
  )
}