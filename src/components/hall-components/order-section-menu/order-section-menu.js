import React, { Fragment } from 'react'
import OrderItens from '../order-items-menu/order-items-menu'
import Button from '../../button/button'
import { openOrder } from '../../services/index'
import './order-section.css'

export default function OrderSection({
  plus,
  minus,
  remove,
  items
}) {
  return (
    <Fragment>
      <section className='section-container-menu-order'>
        <h1 className='menu-order-section-title'>Pedidos</h1>
        <div className='menu-order-section-container'>
          {
            items.length > 0 && items.map((item, index) => {
              return (
                <OrderItens
                  id={item.product_id}
                  name={item.product_name}
                  price={item.product_price}
                  quantity={item.product_quantity}
                  plus={plus}
                  minus={minus}
                  remove={remove}
                  key={index}
                />
              )
            })
          }
        </div>
        <hr className='hr-menu-order' />
        <h2 className='menu-order-total'>Total: R${items.reduce(
          (accumulator, currentValue) => accumulator + Number(currentValue.product_price) * Number(currentValue.product_quantity)
          , 0)},00
        </h2>
        <Button
          name='Cancelar pedido'
          className='btn-order-cancel'
          type='button'
          onClick={
            (event) => {
              event.preventDefault()
            }}
        />
        <Button
          name='Confirmar pedido'
          className='btn-order-confirm'
          type='button'
          onClick={
            async (event) => {
              event.preventDefault()
              await openOrder(
                localStorage.getItem('clientName'),
                localStorage.getItem('tableNumber'),
                items.map((item) => {
                  return {
                    'id': Number(item.product_id),
                    'qtd': Number(item.product_quantity)
                  }
                })
              )
            }
          }


        />
      </section>
    </Fragment>
  )
}
