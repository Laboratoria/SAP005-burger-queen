import React, { Fragment } from 'react'
import { FaPlus } from 'react-icons/fa'
import './menu-items.css'
import { getImage } from '../../../services/services'

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

      {

        productId && productName && productPrice && srcImg && altImg && onClick &&
        <section value={productId} onClick={onClick} className='product-section'>
          <img
            className='product-img'
            src={getImage(productId)}
            alt={altImg}
            id={productId}
            name={productName}
            price={productPrice}
          /><br />
          <p
            name={productName}
            price={productPrice}
            id={productId}
            className='product-name'
          >
            {productName}
          </p>
          <p
            name={productName}
            price={productPrice}
            id={productId}
            className='product-price'
          >
            R$ {productPrice},00
        </p>
        </section>
      }

    </Fragment>
  )
}