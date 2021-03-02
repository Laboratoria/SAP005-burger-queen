import React, { useEffect, useState } from "react";
import './Kitchen.css';

export const Kitchen = () => {
    let token = localStorage.getItem('token');
    const [pendingOrders, setPendingOrders] = useState([])
    const [progressOrders, setProgressOrders] = useState([])
    // const [loading, setLoading] = useState(true);


    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            },
        };

        fetch('https://lab-api-bq.herokuapp.com/orders', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    const allOrders = data;
                    setPendingOrders(allOrders.filter((pedido) => pedido.status.includes("pending")))
                    setProgressOrders(allOrders.filter((pedido) => pedido.status.includes("progress")))
                }
                // setLoading(false)
            })
    }, [token]);

    console.log(pendingOrders)
    console.log(progressOrders)

    return (
        <div className="div-kitchen">
        {pendingOrders.map((pedido) => {
        return (
          <table key={pedido.id}>
            <tbody>
              <tr>
                <th>Pedido nº {pedido.id}</th>
                <th>Cliente: {pedido.client_name}</th>
                <th>Mesa: {pedido.table}</th>
                <th>
                  Status:
                  {pedido.status
                    .replace('pending', 'Pendente')
                    .replace('preparing', 'Preparando')}
                </th>
              </tr>
              <tr>
                <th>Qtde</th>
                <th>Ítem</th>
                <th>Complemento</th>
                <th>Adicionais</th>
              </tr>

              {pedido.Products.map((itens, index) => (
                <tr key={index}>
                  <td>{itens.qtd}</td>
                  <td>{itens.name}</td>
                  <td>{itens.flavor === 'null' ? '' : itens.flavor}</td>
                  <td>{itens.complement === 'null' ? '' : itens.complement}</td>
                </tr>
              ))}
              <tr>
                <th>
                  {/* <button
                    className='btn-preparar'
                    onClick={(e) => handlePreparar(pedido, e)}
                  >
                    PREPARAR
                  </button>
                </th>
                <th>
                  <button onClick={() => handleFinalizar(pedido)}>
                    FINALIZAR
                  </button> */}
                </th>
              </tr>
            </tbody>
          </table>
        );
      })}
        </div>
    )
};