import React, { useEffect, useState, useCallback } from "react";
import "./OrderReady.css";
import { Link } from "react-router-dom";

const OrderReady = () => {
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
        const order = json.filter((item) => item.status === "Pedido Pronto");
        console.log(json)
        setOrder(order);
      });
  }, [token]);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return (
    <div className="order-ready">
      <div className="show-ready">
        {order &&
          order.map(function (product, index) {
            return (
              <div key={index}>
                <span>
                  <p>Atendente: {product.user_id}</p>
                </span>
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
                  <p>
                    {product.Products.map(function (item) {
                      return (
                        <div key={item.id}>
                          <p>Quant. {item.qtd}</p>
                          <p>Item {item.name} </p>
                        </div>
                      );
                    })}
                  </p>
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OrderReady;
