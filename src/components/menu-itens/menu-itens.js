import React, { Fragment } from 'react'

export default function MenuItens({
  classNameImg,
  srcImg,
  altImg,
  iconImg,
  classNameProduct,
  classNamePrice,
  productName,
  productPrice
}) {
  return (
    <Fragment>
      <img
        className={classNameImg}
        src={srcImg}
        alt={altImg}
        icon={iconImg}
      />
      <p className={classNameProduct}>{productName}</p>
      <p className={classNamePrice}>{productPrice}</p>
    </Fragment>
  )
}