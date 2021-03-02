import { Fragment } from 'react'
import React from 'react'
import Navbar from '../../components/generic-components/navbar/navbar'
import OrderInfo from '../../components/generic-components/order-info/order-info'
import './status-order.css'

export const StatusOrder = () => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <section className='ready-status'>
          <OrderInfo
            statusTitle='Pronto'
            nextStatus='Entregar'
            onClickNextStatus=''
            orders={
              (
                [
                  {
                    "id": 0,
                    "client_name": "Carol",
                    "user_id": 0,
                    "table": 5,
                    "status": "Pronto",
                    "processedAt": "2021-03-02",
                    "createdAt": "2021-03-02",
                    "updatedAt": "2021-03-02",
                    "Products": [
                      {
                        "id": 0,
                        "name": "Hambúrguer simples",
                        "flavor": "string",
                        "complement": "string",
                        "qtd": 2
                      }
                    ]
                  },
                  {
                    "id": 0,
                    "client_name": "Cris",
                    "user_id": 0,
                    "table": 7,
                    "status": "Pronto",
                    "processedAt": "2021-03-02",
                    "createdAt": "2021-03-02",
                    "updatedAt": "2021-03-02",
                    "Products": [
                      {
                        "id": 0,
                        "name": "Batata frita",
                        "flavor": "string",
                        "complement": "string",
                        "qtd": 1
                      },
                      {
                        "id": 0,
                        "name": "Refrigerante 500ml",
                        "flavor": "string",
                        "complement": "string",
                        "qtd": 1
                      }
                    ]
                  }
                ]
              )
            }
          />

        </section>
      </main>
    </Fragment >
  )
}