import React, { useEffect, useState, useCallback } from "react";
import "./OrdersFinished.css";
import { Link } from "react-router-dom";

const OrdersFinished= () => {
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
                const order = json.filter((item) => item.status === "Pedido finalizado");
                console.log(json)
                setOrder(order);
            });
    }, [token]);

    useEffect(() => {
        getOrders();
    }, [getOrders]);

    return (
        <div className="order-finished">
            <div className="show-ready">
                {order &&
                    order.map(function (product, index) {
                        return (
                            <div className="card-orders" key={index}>
                                <span className="header-card">
                                    <div><strong>Mesa:</strong> {product.table} | <strong>Pedido:</strong> {product.id}</div>
                                </span>
                                <span>
                                    <div className="infos">
                                        <p><strong>Atendente:</strong> {product.user_id}</p>
                                        <p><strong>Cliente:</strong> {product.client_name}</p>
                                        <p><strong>Status:</strong> {product.status}</p>
                                        <p><strong>Data/Hora:</strong> {product.createdAt}</p>
                                    </div>
                                    <p>
                                        {product.Products.map(function (item) {
                                            return (
                                                <div key={item.id}>
                                                    <p>Quant: {item.qtd}</p>
                                                    <p>Item: {item.name} </p>
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
    );
};

export default OrdersFinished;
