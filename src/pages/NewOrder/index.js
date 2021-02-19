import React, { Fragment, useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import MenuItens from '../../components/menu-itens/menu-itens'
import { getProducts } from '../../services/index'

const NewOrder = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const storeProducts = async () => {
      const response = await getProducts()
      setProducts(response)
    }
    storeProducts()
  }, [])

  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <h1>Hambúrgueres</h1>
        <div>

          {
            products
              .filter((product) => product.type === 'all-day')
              .map((product) => {
                return (
                  <MenuItens
                    srcImg={product.image}
                    alt={product.name}
                    productName={product.name}
                    productPrice={product.price}
                  />
                )
              })
          }

        </div>
      </main>
    </Fragment >
  )
}
export default NewOrder;