import React, { useEffect, useState, useCallback } from "react";
import "./OrderFinished.css";
import { useHistory } from "react-router-dom";
import Return from "../../assets/back.png";

const OrdersFinished = () => {
  const token = localStorage.getItem("token");
  const [order, setOrder] = useState([]);
  const history = useHistory();
  const routerOrderBack = () => {
    history.push("/Hall");
  };

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
        const order = json.filter(
          (item) => item.status === "Pedido Entregue"
        );
        console.log(json);
        setOrder(order);
      });
  }, [token]);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  const finishedOrders = (productId) => {
    fetch(`https://lab-api-bq.herokuapp.com/orders/${productId}`, {
      method: "PUT",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
      body: JSON.stringify({
        status: "Pedido Finalizado",
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        const changeOrder = order.filter((item) =>
          item.id
          !== productId);

        setOrder(changeOrder);
      });
  };

  return (
    <>
      <div className="container-icon-return">
        <img
          className="icon-return"
          src={Return}
          alt="icon-return"
          onClick={() => {
            routerOrderBack();
          }}
        />
      </div>
      <div className="order-ready">
        <div className="show-ready">
          {order &&

            order.map
              (function (product, index) {
                return (
                  <div className="card-orders" key={index}>
                    <span className="header-card">
                      <div>
                        <strong>Mesa:</strong> {product.table} |{" "}
                        <strong>Pedido:</strong> {
                          product.id
                        }
                      </div>
                    </span>
                    <span>
                      <div className="infos">
                        <p>
                          <strong>Atendente:</strong> {product.user_id}
                        </p>
                        <p>
                          <strong>Cliente:</strong> {product.client_name}
                        </p>
                        <p>
                          <strong>Status:</strong> {product.status}
                        </p>
                        <p>
                          <strong>Data/Hora:</strong> {product.createdAt}
                        </p>
                      </div>
                      <p>
                        {
                          product.Products.map
                            (function (item) {
                              return (
                                <div key={
                                  item.id
                                }>
                                  <p>Quant: {item.qtd}</p>
                                  <p>Item: {
                                    item.name
                                  } </p>
                                  <p>Sabor: {item.flavor}</p>
                                  <p>Complemento: {item.complement}</p>
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
    </>
  );
};

export default OrdersFinished;

