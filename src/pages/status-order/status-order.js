import { Fragment, useState, useEffect, useCallback } from 'react'
import React from 'react'
import Navbar from '../../components/generic-components/navbar/navbar'
import OrderInfo from '../../components/generic-components/order-info/order-info'
import { getAllOrders } from '../../services/services'
import './status-order.css'

export const StatusOrder = () => {

  const [orders, setOrders] = useState([])

  const storeOrders = useCallback(async () => {
    const orders = await getAllOrders()
    setOrders(orders)
  }, []);

  useEffect(() => {
    storeOrders()
  }, [storeOrders])


  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <section className='ready-status'>
          <OrderInfo
            statusTitle='Pendente'
            nextStatus='Preparar'
            nextStatusApi='preparing'
            orders={
              orders.filter((order) => order.status === 'pending')
            }
            callback={
              () => {
                storeOrders()
              }
            }
          />
          <OrderInfo
            statusTitle='Preparando'
            nextStatus='Pronto'
            nextStatusApi='ready_kitchen'
            orders={
              orders.filter((order) => order.status === 'preparing')
            }
          />

        </section>
      </main>
    </Fragment >
  )
}