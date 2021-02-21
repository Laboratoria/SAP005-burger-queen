import React, { Fragment, useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import MenuItens from '../../components/menu-itens/menu-itens'
import { getProducts } from '../../services/index'
import './style.css'

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

        <div class="container">
          <div class="tabby">

            <div class="tab">
              <input type="radio" id="tab-1" name="tab-group-1" checked />
              <label for="tab-1">Café da manhã</label>
              <div class="content">
                <h1>Lanches</h1>
                <div>
                  {
                    products
                      .filter((product) => product.name === 'Misto quente')
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
                <h1>Bebidas</h1>
                <div>
                  {
                    products
                      .filter((product) => product.name !== 'Misto quente' && product.type === 'breakfast')
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
              </div>
            </div>
            <div class="tab">
              <input type="radio" id="tab-2" name="tab-group-1" />
              <label for="tab-2">Almoço/Jantar</label>
              <div class="content">
                <h1>Hambúrgueres</h1>
                <div>
                  {
                    products
                      .filter((product) => product.sub_type === 'hamburguer' && (product.id === 33 || product.id === 42))
                      .map((product) => {
                        return (
                          <MenuItens
                            srcImg={product.image}
                            alt={product.name}
                            productName={product.name}
                            productPrice={product.price}
                            onClick={
                              (event) => {
                                event.preventDefault()
                                console.log('clicou')
                              }
                            }
                          />
                        )
                      })
                  }
                </div>
                <h1>Acompanhamentos</h1>
                <div>
                  {
                    products
                      .filter((product) => product.sub_type === 'side')
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
                <h1>Bebidas</h1>
                <div>
                  {
                    products
                      .filter((product) => product.sub_type === 'drinks')
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
              </div>
            </div>
          </div>
        </div>


      </main>
    </Fragment >
  )
}
export default NewOrder;