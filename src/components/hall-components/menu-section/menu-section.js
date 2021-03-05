import React, { Fragment } from 'react'
import MenuItens from '../menu-items/menu-items'
import './menu-section.css'

export default function MenuSection({
  menuSectionTitle,
  products,
  onClick
}) {
  return (
    <Fragment>
      <section className='section-container'>
        <h1 className='menu-section-title'>{menuSectionTitle}</h1>
        <div className='menu-section-container'>
          {
            products && products.length > 0 && products.map((product, index) => {
              return (
                <MenuItens
                  key={index}
                  productId={product.id}
                  srcImg={product.image}
                  altImg={product.name}
                  productName={product.name}
                  productPrice={product.price}
                  onClick={onClick}
                />
              )
            })
          }
        </div>
      </section>
    </Fragment>
  )
}