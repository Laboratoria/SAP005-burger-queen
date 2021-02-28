import React, { Fragment } from 'react'
import { FaPlus } from 'react-icons/fa'
import './menu-itens.css'

export default function MenuItens({
  onClick,
  productId,
  srcImg,
  altImg,
  productName,
  productPrice,
}) {
  return (
    <Fragment>

      <section value={productId} onClick={onClick} className='product-section'>
        <img
          className='product-img'
          src={srcImg}
          alt={altImg}
          value={productId}
          description={productName}
          price={productPrice}
        />
        <p
          description={productName}
          price={productPrice}
          value={productId}
          className='product-name'
        >
          {productName}
        </p>
        <p
          description={productName}
          price={productPrice}
          value={productId}
          className='product-price'
        >
          R$ {productPrice},00
        </p>
        <FaPlus
          description={productName}
          price={productPrice}
          value={productId}
          className='icon-plus' />
      </section>

    </Fragment>
  )
}