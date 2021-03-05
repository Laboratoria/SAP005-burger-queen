import React, { useEffect, useState, useCallback } from "react";
import HeaderKitchen from "../../components/HeaderKitchen/HeaderKitchen";
import "./Kitchen.css";
import { useHistory } from "react-router-dom";
import Logout from "../../assets/logout.png";

const Kitchen = () => {
  const token = localStorage.getItem("token");
  const [order, setOrder] = useState([]);
  const history = useHistory();

  const handleSignOut = (event) => {
    alert("Usuário deslogado");
    localStorage.clear();
    history.push("/");
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
        const order = json.filter((item) => item.status === "pending");
        setOrder(order);
      });
  }, [token]);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  const readyOrders = (productId) => {
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

        setOrder(changeOrder);
      });
  };

  return (
    <>
    
    <div className="main-kitchen">
      <HeaderKitchen />
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
                        <p>Sabor: {item.flavor}</p>
                        <p>Complemento: {item.complement}</p>
                      </div>
                    );
                  })}
                </p>

              
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
      <div className="container-icon-logout">
            <img
              className="item-icon-logout"
              src={Logout}
              alt="icon-logout"
              onClick={handleSignOut}
            />
          </div>
    </div>
    </>
  );
};

export default Kitchen;
