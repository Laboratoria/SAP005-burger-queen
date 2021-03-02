
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header.js';
import './Lounge.css'
import { Card, Button, CardTitle, CardText, CardGroup, CardBody, Row, Col } from 'reactstrap';

export const ReadyOrderList = (props) => {
  const token = localStorage.getItem('token')
  const [readyOrders, setReadyOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const route = useHistory();
  const loungeRoute = () => {
    route.push('/Lounge')
  }

  function BackBtn(event) {
    event.preventDefault();
    loungeRoute();
  }

  useEffect(() => {
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
      })
  }, [token]);

  return (
    <>
    
      <Header />
     
      {loading ?
        (
          <p>Carregando</p>
        ) : (
          <>
           
            <div className="readyOrders">

              {readyOrders.map((o) => (
                <Row>
                  <Col alignsm="6">
                  <CardGroup>
                    
                    <Card body className="text-center" key={o.id}>

                      <CardTitle tag="h5">Mesa: {o.table}</CardTitle>
                      <CardText>
                        <table className="table" key={o.id}>
                          <tbody>
                            <tr>
                              <th>Pedido n° {o.id}   </th>
                              <th>Cliente: {o.client_name}</th>
                              <th>Status: {o.status}</th>
                              <th></th>
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
                      <Button>Entregar</Button>
                    </Card>
                    </CardGroup>
                  </Col>
                </Row>
              ))}
              </div>
            
          </>
        )
      }

    </>
  )


};