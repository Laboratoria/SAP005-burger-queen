import React, { useEffect, useState } from "react";
import { Card, CardText, CardGroup, Row, Col } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import './Kitchen.css';

export const Kitchen = () => {
  let token = localStorage.getItem("token");
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
        const allOrders = data;
        setPendingOrders(allOrders.filter((order) => order.status.includes("pending")))
        setPreparingOrders(allOrders.filter((order) => order.status.includes("preparing")))
      })
  };

  useEffect(() => {
    ordersList();
  }, []);

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

  const route = useHistory();

  const handleSignOut = () => {
    alert('Usuário deslogado');
    localStorage.clear();
    route.push('/');
  };

  return (
    <div>
      <>
      <svg onClick={handleSignOut}xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16" className="signout-btn-kitchen">
        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
      </svg>
        <h1 className="h1-kitchen">Pedidos Pendentes</h1>
        {pendingOrders.map((order) => {
          const createdDate = new Date(order.createdAt).toLocaleString()
          return (
            <Row>
              <Col>
                <CardGroup>
                  <Card body className="text-center" key={order.id}>
                    <CardText>
                      <table className="table" >
                        <tbody>
                          <tr>
                            <th>Pedido nº {order.id}</th>
                            <th>Cliente: {order.client_name}</th>
                            <th>Mesa: {order.table}</th>
                            <th>Status: {order.status.replace("pending", "Pendente")}</th>
                            <th>Criado: {createdDate}</th>
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
                              <td>{items.flavor}</td>
                              <td>{items.complement}</td>
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
                    </CardText>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          )
        })}

        <h1 className="h1-kitchen">Pedidos em Preparo</h1>
        {preparingOrders.map((order) => {
          const createdDateString = new Date(order.createdAt).toLocaleString()
          const updatedDate = new Date(order.updatedAt).toLocaleString()
          return (
            <Row>
              <Col>
                <CardGroup>
                  <Card body className="text-center" key={order.id}>
                    <CardText>
                      <table className="table">
                        <tbody>
                          <tr>
                            <th>Pedido nº {order.id}</th>
                            <th>Cliente: {order.client_name}</th>
                            <th>Mesa: {order.table}</th>
                            <th>Status: {order.status.replace("preparing", "Preparando")}</th>
                            <th>Criado: {createdDateString}</th>
                            <th>Atualizado: {updatedDate}</th>
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
                              <td>{items.flavor}</td>
                              <td>{items.complement}</td>
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
                    </CardText>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          )
        })}
      </>
    </div>
  )
};