import React, { useEffect, useState, useCallback } from 'react';
import './Kitchen.css';
import { Link } from "react-router-dom";
import Header from '../../components/Header/Header.js';

import Button from '../../components/Button/Button.js'

// function Kitchen() {

//   const history = useHistory()

const Kitchen = () => {
  const token = localStorage.getItem('token')
  const [order, setOrder] = useState([])
  const [orderStatus, setOrderStatus] = useState([{ status: 'pending' }]);

  const getOrders = useCallback(() => {

    fetch('https://lab-api-bq.herokuapp.com/orders', {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Authorization': `${token}`,
      },
    })

      .then((response) => response.json())
      .then((json) => {

        const order = json.filter(item => item.status === 'pending')
        setOrder(order)

      });

  }, [token])

  useEffect(() => {
    getOrders()
  }, [getOrders])

  const readyOrders = (productId) => {

    fetch(`https://lab-api-bq.herokuapp.com/orders/${productId}`, {
      method: 'PUT',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      },
      body: JSON.stringify({
        'status': 'Pedido pronto'
      })
    })
      .then((response) => response.json())
      .then((json) => {
        setOrderStatus({ ...orderStatus, status: 'Pedido pronto' })
      })
  }

  return (
    <div className="pending">

      <div className="show-order">

        {order && order.map(function (product, index) {
          return (
            <div key={index}>

              <span><p>Atendente: {product.user_id}</p></span>
              <span>
                <div>
                  <p>Cliente: {product.client_name}</p>
                  <p>Mesa: {product.table}</p>
                  <p>Pedido Nº: {product.id}</p>
                </div>
                <div>
                  <p>Status: {product.status}</p>
                  <p>Data/Hora: {product.createdAt}</p>
                </div>
                <p>{product.Products.map(function (item) {
                  return (
                    <div key={item.id}>
                      <p>Quant. {item.qtd}</p>
                      <p>Item {item.name} </p>
                    </div>
                  )
                })}

                  <button className="btn-finish-order"
                    type="submit"
                    onClick={() => { readyOrders(product.id) }}>
                    Pronto
                  </button>

                </p>
              </span>
            </div>
          )
        })}

      </div>

      <p>
        <Link to="/finalized-orders">
          <span id="button"
            className="btn-finish-order">Pedidos Finalizados</span>
        </Link>
      </p>

    </div>
  )
};

export default Kitchen;


//   function Preparar(e) {
//     e.preventDefault();
//     sessionStorage.setItem("status", "pending");
//     sessionStorage.setItem("newStatus", "pronto");
//     sessionStorage.setItem("back", "cozinha");
//     history.push('/alloders')
//   }

//   const routerAllOrders = (e) => {
//     e.preventDefault();
//     sessionStorage.removeItem("status");
//     sessionStorage.removeItem("newStatus");
//     sessionStorage.setItem("back", "cozinha");
//     history.push('/alloders')
//   }

//   return (
//     <div className="Cozinha">   
//     <h1>Cozinha :</h1>  
//       <input className="button-prepara"
//                                 type="button"
//                                 value="Preparar"

//         OnClick={(e) => Preparar(e)}
//       />


//       <input className="button-pedidos"
//                                 type="button"
//                                 value="Todos os Pedidos"       
//                                 OnClick={(e) => routerAllOrders(e)}
//       />

//     </div>


//   );
// }
// function Kitchen() {
//   const token = localStorage.getItem("token")
//   const id = localStorage.getItem("id")
//   console.log(token,id)


//   return (
//     <>
//     <div className="Cozinha">
//       <h1 className="CozinhaTitle">Página cozinha</h1>
//     </div>

//     <div className="hall-page">
//                 <Header />
//                 <CardsKitchen />

//             </div>


//     </>
//   );
// }




// const Kitchen = () => {
//   const [order, setOrder] = useState(0);

//   const requestReceived = () => {
//     setOrder(order + 1);
//   };


//   const token = localStorage.getItem("token")
//   const id = localStorage.getItem("id")
//   console.log(token,id)

//   return (

//     <div>
//       <div>{order}</div>
//       <button onClick={requestReceived}>Criar Pedido</button>
//     </div>

//   );
// };

// export default Kitchen;