import React, { Fragment } from 'react'
import MenuItens from '../menu-itens/menu-itens'

export default function MenuSection({
  menuSectionTitle,
  products,
  onClick
}) {
  return (
    <Fragment>
      <h1>{menuSectionTitle}</h1>
      <div>
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
    </Fragment>
  )
}