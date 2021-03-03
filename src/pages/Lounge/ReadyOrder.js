
import React, { useEffect, useState } from 'react';

import Header from '../../components/Header.js';
import './Lounge.css'
import { Card, Button, CardTitle, CardText, CardGroup, Row, Col } from 'reactstrap';

export const ReadyOrderList = (props) => {
  const token = localStorage.getItem('token')
  const [readyOrders, setReadyOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  
    
    const updatedReadyOrderList = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,

      redirect: 'follow'
    };
    fetch("https://lab-api-bq.herokuapp.com/orders", requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data)

        const orders = data;
        const readyOrders = orders.filter((o) => o.status.includes("ready"))
        setReadyOrders(readyOrders)
        console.log(readyOrders)
        setLoading(false)
      })}
  useEffect(() => {
    updatedReadyOrderList();
  }, []);

  const handleUpdateStatus = (o) => {    
    console.log('entrou handleUpdateStatus')
    const myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");
    const id=o.id;
    const status = { status: "delivered" };
    const raw = JSON.stringify(status);

    const requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://lab-api-bq.herokuapp.com/orders/"+id, requestOptions)
      .then(response => response.json())
      .then(() => {
        updatedReadyOrderList();
      }
      )
      .catch(error => console.log('error', error));
  }
  
  return (
    <>

      <Header />

      {loading ?
        (
          <p>Carregando</p>
        ) : (
          <>

            <div className="ready-orders">

              {readyOrders.map((o) => {
                const dataUpdated = new Date(o.updatedAt);
                const dataCreated = new Date(o.createdAt);
                const diferença = Math.abs(dataUpdated) - dataCreated;
                const minutes = Math.floor(diferença / 1000 / 60);
                return (
                 
                <Row >
                  <Col sm="6" >
                    <CardGroup>

                      <Card body className="text-center" key={o.id}>

                        <CardTitle tag="h5">Mesa: {o.table}</CardTitle>
                        <CardText>
                          <table className="table" >
                            <tbody>
                              <tr>
                                <th>Pedido n° {o.id}   </th>
                                <th>Cliente: {o.client_name}</th>
                                <th>Status: {o.status}</th>
                                <th>Tempo decorrido: {minutes}min</th>
                              </tr>
                              <tr>
                                <th>Qtde</th>
                                <th>Ítem</th>
                                <th>Complemento</th>
                                <th>Adicionais</th>
                              </tr>

                              {o.Products.map((itens, index) => (
                                <tr key={index}>
                                  <td>{itens.qtd}</td>
                                  <td>{itens.name}</td>
                                  <td>{itens.flavor === 'null' ? '' : itens.flavor}</td>
                                  <td>{itens.complement === 'null' ? '' : itens.complement}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </CardText>
                        <Button onClick={() => handleUpdateStatus(o)}>Entregar</Button>
                      </Card>
                    </CardGroup>
                  </Col>
                </Row>
                )
})}
            </div>

          </>
        )
      }

    </>
  )


};