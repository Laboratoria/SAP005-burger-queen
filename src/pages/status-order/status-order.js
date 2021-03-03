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
        <section className='container-status-orders'>
          <div className='status-kitchen'>
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
          </div>
          <div className='status-kitchen'>
            <OrderInfo
              statusTitle='Preparando'
              nextStatus='Pronto'
              nextStatusApi='ready_kitchen'
              orders={
                orders.filter((order) => order.status === 'preparing')
              }
              callback={
                () => {
                  storeOrders()
                }
              }
            />
          </div>
          <div className='status-kitchen'>
            <OrderInfo
              statusTitle='Pronto'
              nextStatusApi='ready_hall'
              orders={
                orders.filter((order) => order.status === 'ready_kitchen')
              }
              callback={
                () => {
                  storeOrders()
                }
              }
            />
          </div>
        </section>
        <section>
          <div className='status-hall'>
            <OrderInfo
              statusTitle='Pronto'
              nextStatus='Entregar'
              nextStatusApi='delivery'
              orders={
                orders.filter((order) => order.status === 'ready_hall')
              }
              callback={
                () => {
                  storeOrders()
                }
              }
            />
          </div>
          <div className='status-hall'>
            <OrderInfo
              statusTitle='Entregue'
              orders={
                orders.filter((order) => order.status === 'delivery')
              }
              callback={
                () => {
                  storeOrders()
                }
              }
            />
          </div>
        </section>
      </main>
    </Fragment >
  )
}