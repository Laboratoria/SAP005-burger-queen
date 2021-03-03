import React, { useEffect, useState } from "react";
import './Kitchen.css';

export const Kitchen = () => {
  let token = localStorage.getItem('token');
  const [pendingOrders, setPendingOrders] = useState([])
  const [preparingOrders, setPreparingOrders] = useState([])

  const ordersList = () => {
    fetch('https://lab-api-bq.herokuapp.com/orders', {

      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      },
    })

      .then(response => response.json())
      .then(data => {
        if (data) {
          const allOrders = data;
          setPendingOrders(allOrders.filter((order) => order.status.includes("pending")))
          setPreparingOrders(allOrders.filter((order) => order.status.includes("preparing")))
        }
      })
  };

  useEffect(() => {
    ordersList();
  }, []);


  console.log(pendingOrders)
  console.log(preparingOrders)

  const handlePrepare = (order) => {
    const url = 'https://lab-api-bq.herokuapp.com/orders/';
    const id = order.id;
    const status = { status: 'preparing' };

    fetch(url + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`,
      },
      body: JSON.stringify(status),
    }).then((response) => {
      response.json().then(() => {
        ordersList();
      });
    });
  };

  const handleFinish = (order) => {
    const url = 'https://lab-api-bq.herokuapp.com/orders/';
    const id = order.id;
    const status = { status: 'ready' };

    fetch(url + id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`,
      },
      body: JSON.stringify(status),
    }).then((response) => {
      response.json().then(() => {
        ordersList();
      });
    });
  };

  return (
    <div>
      <>
        <h1>Pedidos Pendentes</h1>
        {pendingOrders.map((order) => {
          return (
            <table key={order.id} className="kitchen-orders" >
              <tbody>
                <tr>
                  <th>Pedido nº {order.id}</th>
                  <th>Cliente: {order.client_name}</th>
                  <th>Mesa: {order.table}</th>
                  <th>
                    Status:
                  {order.status
                      .replace('pending', 'Pendente')}
                  </th>
                </tr>
                <tr>
                  <th>Qtde</th>
                  <th>Ítem</th>
                  <th>Complemento</th>
                  <th>Adicionais</th>
                </tr>

                {order.Products.map((items, index) => (
                  <tr key={index}>
                    <td>{items.qtd}</td>
                    <td>{items.name}</td>
                    <td>{items.flavor === 'null' ? '' : items.flavor}</td>
                    <td>{items.complement === 'null' ? '' : items.complement}</td>
                  </tr>
                ))}
                <tr>
                  <th>
                    <button
                      className="prepare-btn"
                      onClick={() => handlePrepare(order)}>
                      Preparar Pedido
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          )
        })}

        <h1>Pedidos em Andamento</h1>
        {preparingOrders.map((order) => {
          return (
            <table key={order.id} className="kitchen-orders" >
              <tbody>
                <tr>
                  <th>Pedido nº {order.id}</th>
                  <th>Cliente: {order.client_name}</th>
                  <th>Mesa: {order.table}</th>
                  <th>
                    Status:
                  {order.status
                      .replace('preparing', 'Preparando')}
                  </th>
                </tr>
                <tr>
                  <th>Qtde</th>
                  <th>Ítem</th>
                  <th>Complemento</th>
                  <th>Adicionais</th>
                </tr>

                {order.Products.map((items, index) => (
                  <tr key={index}>
                    <td>{items.qtd}</td>
                    <td>{items.name}</td>
                    <td>{items.flavor === 'null' ? '' : items.flavor}</td>
                    <td>{items.complement === 'null' ? '' : items.complement}</td>
                  </tr>
                ))}
                <tr>
                  <th>
                    <button
                      className="finish-btn"
                      onClick={() => handleFinish(order)}>
                      Pedido Pronto
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          )
        })}
      </>
    </div>
  )
};