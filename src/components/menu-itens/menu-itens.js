import React, { Fragment } from 'react'
import { FaPlus } from 'react-icons/fa'

export default function MenuItens({
  srcImg,
  altImg,
  productName,
  productPrice
}) {
  return (
    <Fragment>
      <img
        className='product-img'
        src={srcImg}
        alt={altImg}
      />
      <p className='product-name'>{productName}</p>
      <p className='product-price'>R$ {productPrice}</p>
      <FaPlus className='icon-img' />
    </Fragment>
  )
}