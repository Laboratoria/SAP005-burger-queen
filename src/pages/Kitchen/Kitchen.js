import React, { useEffect, useState, useCallback } from "react";
import "./Kitchen.css";
import { Link } from "react-router-dom";


const Kitchen = () => {
  const token = localStorage.getItem("token");
  const [order, setOrder] = useState([]);

  const getOrders = useCallback(() => {
    fetch("https://lab-api-bq.herokuapp.com/orders", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `${token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const order = json.filter((item) => item.status === "pending");
        setOrder(order);
      });
  }, [token]);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  const readyOrders = (productId) => {
    console.log(productId);

    fetch(`https://lab-api-bq.herokuapp.com/orders/${productId}`, {
      method: "PUT",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify({
        status: "Pedido Pronto",
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        const changeOrder = order.filter((item) => item.id !== productId);

        console.log(changeOrder);
        setOrder(changeOrder);
      });
  };

  return (
    <div className="main-kitchen">
      <div className="show-order">
        {order &&
          order.map(function (product, index) {
            return (
              <div className="card-orders" key={index}>
                <span className="header-card">
                  <div><strong>Mesa:</strong> {product.table} | <strong>Pedido:</strong> {product.id}</div>
                </span>
                <p className="main-list">
                  {product.Products.map(function (item) {
                    return (
                      <div key={item.id}>
                        <p><strong>Item: </strong>{item.qtd} x {item.name} </p>
                        {/* <p>Quant: {item.qtd}</p> */}
                        {/* <p>Sabor: {item.flavor}</p>
                          <p>Complemento: {item.complement}</p> */}
                      </div>
                    );
                  })}
                </p>
                 

                  {/* <div className="btn-finish-order">
                      <Link to="/finalized-orders">
                        <span id="button" className="btn-finish-order">
                          Pedidos Finalizados
                        </span>
                      </Link>
                    </div> */}
                
                  <div className="infos">
                    <p><strong>Atendente:</strong> {product.user_id}</p>
                    <p><strong>Cliente:</strong> {product.client_name}</p>
                    <p><strong>Status:</strong> {product.status}</p>
                    <p><strong>Data/Hora:</strong> {product.createdAt}</p>
                  </div>
                   <button 
                    className="btn-reader-order"
                    type="submit"
                    onClick={() => {
                      readyOrders(product.id);
                    }}>
                    Pronto
                    </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Kitchen;
