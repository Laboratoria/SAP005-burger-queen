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
            products.length > 0 && products.map((product, index) => {
              return (
                <MenuItens
                  value={product.id}
                  productId={product.id}
                  srcImg={product.image}
                  alt={product.name}
                  productName={product.name}
                  productPrice={product.price}
                  onClick={onClick}
                  key={index}
                />
              )
            })
          }
        </div>
      </section>
    </Fragment>
  )
}