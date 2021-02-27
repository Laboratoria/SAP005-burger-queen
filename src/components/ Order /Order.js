import React, { useEffect, useState } from 'react';

const Order = () => {
    const tokenUser = localStorage.getItem('token');
    const order = JSON.parse(localStorage.getItem('order'));
    const [sum, setSum] = useState(0);
    const [orderSummary, setOrderSummary] = useState([]);
    const [order, setOrder] = useState({});
    const [deletedItem, setDeletedItem] = useState([]);
    const [finalPrice, setFinalPrice] = useState([]);
    const [itemPrice, setItemPrice] = useState([]);

    const sumOrder = () => {
        const soma = document.getElementById("soma")
        order.forEach(item => {
            let add = Number(item.objeto.price)
            setSum(add = add + sum)
            soma.innerText = `
                    <p> ${sum} oi </p>
                    `
        })
    }

    const handleAdd = (product) => {
        setOrderSummary([...orderSummary, product]);
        setItemPrice([...itemPrice, product.price]);
        const productApi = orderSummary.map((product) => {
            return {
                id: product.id,
                qtd: 1,
            };
        });

        const qtd = productApi.reduce(function (r, a) {
            r[a.id] = r[a.id] || [];
            r[a.id].push(a);
            return r;
        }, Object.create(null));

        const arrayProducts = [];
        for (const [key, value] of Object.entries(qtd)) {
            arrayProducts.push({
                id: key,
                qtd: value.length,
            });
        }

        setOrder({ ...order, products: arrayProducts });
    };

    const handleDelet = (product) => {
        setFinalPrice(itemPrice.splice(orderSummary.indexOf(product), 1));
        setDeletedItem(orderSummary.splice(orderSummary.indexOf(product), 1));
        handleSum();
    };

    const handleSum = () => {
        setFinalPrice(itemPrice.reduce((total, num) => total + num));
    };

    const handleSubmit = () => {
        fetch('https://lab-api-bq.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${tokenUser}`,
            },
            body: JSON.stringify(order),
        })
            .then((response) => {
                response.json().then((data) => {
                    console.log(data);
                });
                setOrder({});
                setOrderSummary([]);
                setFinalPrice([]);
                setItemPrice([]);
                setDeletedItem([]);
                clearInput();
                alert('Pedido enviado');
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    function clearInput() {
        const inputs = document.querySelectorAll('input');
        [].map.call(inputs, (entrada) => (entrada.value = ''));
    }

               