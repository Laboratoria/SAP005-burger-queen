import { Fragment } from 'react'
import React from 'react'
import Navbar from '../../components/generic-components/navbar/navbar'
import AddStatusOrder from '../../components/generic-components/add-status-order/add-status-order'
import './status-order.css'

export const StatusOrder = () => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <AddStatusOrder
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
                  "table": 0,
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
                }
              ]
            )
          }
        />
      </main>
    </Fragment >
  )
}