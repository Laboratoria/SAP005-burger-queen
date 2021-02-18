import React from "react";
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
  return (
    <>
      <nav>
        <ul>
          <li>hamburguers</li>
          <li>café da manhã</li>
          <li>bebidas</li>
          <li>Pedidos</li>
        </ul>
      </nav>
     
     
      <Container>
        <CardItem />
        <Comanda>
          <h2>Comanda</h2>
          <label>Cliente:</label>
          <input placeholder="Nome do cliente"/>
          <br />
          <label>Mesa:</label>
          <input placeholder="Mesa"/>
          <br />
          <p>pedidos...</p>
          <p>valor total: R$....</p>
          <button>enviar pedido</button>
          <button>editar pedido</button>
        </Comanda>
      </Container>
    </>
  );
};

export default Salao;
