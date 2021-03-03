import React, { useEffect, useState, useCallback } from 'react';
import './Kitchen.css';
import { Link } from "react-router-dom";

const Kitchen = () => {
  const token = localStorage.getItem("token")
  const [order, setOrder] = useState([])
  const [orderStatus, setOrderStatus] = useState([{ status: "pending" }]);

  const getOrders = useCallback(() => {

    fetch('https://lab-api-bq.herokuapp.com/orders', {
      method: 'GET',
      headers: {
        "accept": "application/json",
        "Authorization": `${token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {

        const order = json.filter(item => item.status === "pending")
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
        "accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `${token}`
      },
      body: JSON.stringify({
        "status": "Pedido pronto"
      })
    })
      .then((response) => response.json())
      .then((json) => {
        setOrderStatus({ ...orderStatus, status: "Pedido pronto" })
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

                  <button className="btn-reader-order"
                    type="submit"
                    onClick={() => {readyOrders(product.id)}}>
                    Pronto
                  </button>

                  <p>
        <Link to="/finalized-orders">
          <span id="button"
            className="btn-finish-order">Pedidos Finalizados</span>
        </Link>
      </p>

                </p>
              </span>
            </div>
          )
        })}

      </div>

      {/* <p>
        <Link to="/finalized-orders">
          <span id="button"
            className="btn-finish-order">Pedidos Finalizados</span>
        </Link>
      </p> */}

    </div>
  )
};

export default Kitchen;