import React, { Fragment } from 'react'
//import OrderItens from '../order-itens/order-itens'
import './order-section.css'

export default function OrderSection({
  menuOrderTotal
}) {
  return (
    <Fragment>
      <section className='section-container-menu-order'>
        <h1 className='menu-order-section-title'>Pedidos</h1>
        <div className='menu-order-section-container'>

        </div>
        <hr className='hr-menu-order' />
        <h2 className='menu-order-total'>Total:{menuOrderTotal}</h2>
      </section>
    </Fragment>
  )
}