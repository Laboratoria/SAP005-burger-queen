import React, { useState } from 'react';
// import { MdDelete } from "react-icons/md";

function Order() {
    const [table, setTable] = useState ("");
    const tokenUser = localStorage.getItem("token");
    const [orderSummary, setOrderSummary] = useState([]);
    const [makeOrder, setMakeOrder] = useState({ "client": "", "table": table, "products": [] });
    const [errorMessage, setErrorMessage] = useState("");

    function sumPriceTotal(array) {
        return array.reduce((total, item) => total + (item.qtd*item.price), 0);
    };


    return (
        <>
            <section className="resumo-pedido">
                <p className="titulo-resumo-pedido">Resumo do Pedido</p>
                <p className="infos-resumo-pedido">Atendente: </p>
                <input className="cliente-resumo-pedido"
                    type="text"
                    placeholder="Nome do Cliente"
                    onChange={(event) => {
                        setMakeOrder({ ...makeOrder, "client": event.target.value })
                    }}
                />
                {orderSummary !== [] &&
                    <>
                        <section className="titulo-lista-pedido">
                            <label>Item/Valor</label>
                            <label>Quantidade</label>
                        </section>
                        <ul className="lista-pedido">
                            {orderSummary.map((item, index) => (
                                <>
                                    <li className="item-lista-pedido" key={index}>
                                        <label>
                                            {typeof item.name === "string" ? item.name : item.name.map((item) => <><label>{item.name}</label> <label>{item.flavor}</label> <label>{item.complement}</label></>)}
                                            {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price * item.qtd)}
                                        </label>
                                        <input
                                            className="button-manipular-qtd"
                                            id="diminuir-qtd"
                                            type="button"
                                            value="-"
                                            onClick={() => {
                                                if (item.qtd > 1 && item.name === orderSummary[index].name) {
                                                    orderSummary[index].qtd--;
                                                    setOrderSummary([...orderSummary]);
                                                } else if (item.name === orderSummary[index].name && item.qtd === 1) {
                                                    orderSummary.splice(index, 1);
                                                    setOrderSummary([...orderSummary]);
                                                }
                                            }}
                                        />
                                        <label>{item.qtd}</label>
                                        <input
                                            className="button-manipular-qtd"
                                            id="aumentar-qtd"
                                            type="button"
                                            value="+"
                                            onClick={() => {
                                                if (item.name === orderSummary[index].name) {
                                                    orderSummary[index].qtd++;
                                                    setOrderSummary([...orderSummary]);
                                                }
                                            }}
                                        />
                                        <input
                                            className="button-excluir-item"
                                            id="excluir-item"
                                            type="icon"
                                            // <MdDelete size={20} 
                                            onClick={() => {
                                                orderSummary.splice(index, 1);
                                                setOrderSummary([...orderSummary]);
                                            }}
                                            
                                        />
                                    </li>
                                </>
                            ))}
                        </ul>
                        <p className="total-resumo-pedido">TOTAL: {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(sumPriceTotal(orderSummary))}</p>
                        <section className="buttons-resumo-pedido">
                            <input className="button-resumo-pedido"
                                type="button"
                                value="Enviar Pedido"
                                onClick={() => {
                                    if (makeOrder.client !== "") {
                                        const products = orderSummary.map(produto => {
                                            return { "id": produto.id, "qtd": produto.qtd };
                                        });

                                        makeOrder.products = products;

                                        const requestOptions = {
                                            method: 'POST',
                                            headers: {
                                                'Content-Type': 'application/json',
                                                'Authorization': `${tokenUser}`,
                                            },
                                            body: JSON.stringify(makeOrder),
                                        };

                                        fetch('https://lab-api-bq.herokuapp.com/orders', requestOptions)
                                            .then(response => response.json())
                                            .then(data => {
                                                if (data.id !== undefined) {
                                                    console.log(data);
                                                    setOrderSummary([]);
                                                    document.querySelector(".cliente-resumo-pedido").value = "";
                                                } else {
                                                    setErrorMessage(`${data.message}`)
                                                }
                                            })
                                    } else {
                                        setErrorMessage("Preencha o nome do cliente!");
                                    }
                                }}
                            />

                            <input className="button-resumo-pedido"
                                type="button"
                                value="Limpar Pedido"
                                onClick={() => {
                                    setOrderSummary([]);
                                }}
                            />
                        </section>
                    </>
                }
            </section>
        </>
    )
}

export default Order