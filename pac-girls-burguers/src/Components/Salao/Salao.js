import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Comanda = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  border: 1pt solid black;
  border-radius: 3px;
  width: 300px;
  margin: 5px;
  padding: 5px;
  height: 500px;
`;

const Salao = () => {
  const [token, setToken] = useState();

  console.log(token);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  async function orders(token) {
    try {
      const body = {
        client: "kaueny",
        table: "07",
        products: [{ id: 29, qtd: 2 }],
      };
      const response = await fetch("https://lab-api-bq.herokuapp.com/orders", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(body),
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Container>
        <div>
          <CardItem />
        </div>
        <div>
          <Comanda>
            <h2>Comanda</h2>
            <label>Cliente:</label>
            <input placeholder="Nome do cliente" />
            <br />
            <label>Mesa:</label>
            <input placeholder="Mesa" />
            <br />
            <p>pedidos...</p>
            <li>ola</li>
            <p>valor total: R$....</p>
            <button
              onClick={() => {
                orders(token);
              }}
            >
              enviar pedido
            </button>
            <button>editar pedido</button>
          </Comanda>
        </div>
      </Container>
    </>
  );
};

export default Salao;
