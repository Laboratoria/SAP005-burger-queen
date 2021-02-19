import React from 'react'
import { Fragment } from 'react'
import { FaPlus } from 'react-icons/fa'
import Navbar from '../../components/Navbar/Navbar'
import MenuItens from '../../components/menu-itens/menu-itens'

export const NewOrder = () => {


  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <h1>Hambúrgueres</h1>
        <div>
          <MenuItens
            classNameImg='simple-hamburger'
            srcImg={ }
            alt='Hambúrguer Simples'
            icon={FaPlus}
            classNameProduct='product-name'
            classNamePrice='product-price'
            productName='Hambúrguer Simples'
            productPrice='R$'
          />
        </div>
      </main>
    </Fragment >
  )
}