import React, { Fragment } from 'react'
import MenuItens from '../menu-itens/menu-itens'
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
            products
              .map((product) => {
                return (
                  <MenuItens
                    srcImg={product.image}
                    alt={product.name}
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