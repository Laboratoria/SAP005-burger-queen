import React, { useState } from "react";

export const Lounge = () => {
    const [client, setClient] = useState('');
    const [table, setTable] = useState('');
    const [products, setProducts] = useState('')

    const handleClient = (event) => {
        setClient(event.target.value);
    }
    const handleTable = (event) => {
        setTable(event.target.value);
    };
    const handleProducts = (event) => {
        setProducts(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            "client": client,
            "table": table,
            "products": products[
                {
                    "id": 0,
                    "qtd": 0
                }
            ]
        });
        const request = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("lab-api-bq.herokuapp.com/orders", request)
            .then(response => response.JSON())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    };

    return (
        <div>
            <header>
                <h1>Criar pedido</h1>
            </header>
            <form>
                <input type="text" name="name" placeholder="Nome do cliente" id="client-name" value={client} onChange={handleClient} />
                <input type="text" name="table" placeholder="Mesa" id="table" value={table} onChange={handleTable}/>
                <button onClick={handleSubmit}>Salvar</button>
            </form>
        </div>
    )
};
