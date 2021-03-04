
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header.js';
import './Lounge.css'

export const ReadyOrderList = () => {
    const tokenUser = localStorage.getItem('token');
    const [pedidosProntos, setPedidosProntos] = useState([]);
    const [loading, setLoading] = useState(true);
    const route = useHistory();
    const loungeRoute = () => {
      route.push('/Lounge')
    }
  
    function BackBtn(event) {
      event.preventDefault();
      loungeRoute();
    }
  
   /* const listaPedidos = () => {
      fetch('https://lab-api-bq.herokuapp.com/orders', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${tokenUser}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const products = data;
          const pedidosEntregar = products.filter((itens) =>
            itens.status.includes('ready')
          );
          setPedidosProntos(pedidosEntregar);
        });
        setLoading(false);
    };
  
    useEffect(() => {
      listaPedidos();
    }, []);
  
    const handleEntregar = (pedido) => {
      const url = 'https://lab-api-bq.herokuapp.com/orders/';
      const id = pedido.id;
      const status = { status: 'finished' };
  
      fetch(url + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${tokenUser}`,
        },
        body: JSON.stringify(status),
      }).then((response) => {
        response.json().then(() => {
          listaPedidos();
        });
      });
    };
  */
    return (
        <>
        <Header />
      <div>
        <section>
        {/*loading ?
          (
            <p>Carregando</p>
          ) : (
        {pedidosProntos.map((pedido) => {          
            <table key={pedido.id}>
              <tbody>
                <tr>
                  <th>Pedido nº {pedido.id}</th>
                  <th>Cliente: {pedido.client_name}</th>
                  <th>Mesa: {pedido.table}</th>
                  <th>Tempo: {minutes} min</th>
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
                    <button onClick={() => handleEntregar(pedido)}>
                      ENTREGAR
                    </button>
                  </th>
                  <th>*/
                        <button id="back-btn" className="btn" onClick={BackBtn}>Voltar</ button>
               /* </th>
                </tr>
              </tbody>
            </table>
          );
        })}
      )*/}
        </section>
      </div>
      </>
    );
    
  };