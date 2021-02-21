import React, { useEffect, useState } from 'react';

export const Kitchen = () => {
  const token = localStorage.getItem('token');
  const [order, updateOrder] = useState([]); 
  const [excludedOrder, updateExcludeOrder] = useState([]);
  const [amount, updateAmount] = useState([]); 
  const [id, orderId] = useState([]);
  const [productPrice, updateProductPrice] = useState([]); //preco do produto

 

  fetch('https://lab-api-bq.herokuapp.com/orders', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    }
  }, [])
    .then(response => response.json())
    .then((response) => {
      updateOrder(response);
    }, [])
    .catch(error => console.log('error', error));

    const deleteOrder = (product) => {
      updateExcludeOrder(order.slice(order.indexOf(product), 1));
    }

  //fetch('https://lab-api-bq.herokuapp.com/orders/'`${orderId}`, {
    //method: 'DELETE',
    //headers: {
      //'Content-Type': 'application/json',
      //'Authorization': `${token}`
    //}
  //}, [])
  //.then(response => response.json())
  //.then((response) => {
    //orderId(response.id);
    //}, [])
    //.catch(error => console.log('error', error));
  

  return (
    <div>
    <h1>Pedidos solicitados</h1>
    {order.map((product) => {
        return(
            <div className='container'>
                <div className='card'>
                    <div class="card-container">
                        <li key={product.id }>
                            <p>{ product.client_name }</p>
                            <p>{ product.table }</p>
                            <button onClick={() => deleteOrder(product)}>x</button>
                        </li>
                    </div>
                </div>
            </div>
        );
    })}
    </div>
    );
  }
  
