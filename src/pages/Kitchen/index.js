import React, { useState } from 'react';

export const Kitchen = () => {
  const token = localStorage.getItem('token');
  const [order, updateOrder] = useState([]); 

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
                            <button>x</button>
                        </li>
                    </div>
                </div>
            </div>
        );
    })}
    </div>
    );
  }
  
