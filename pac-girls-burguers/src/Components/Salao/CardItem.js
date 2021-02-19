import React, { useState, useEffect } from "react";
import Item from "./Item";

import styled from "styled-components";
import { Select } from "../Register/register-styled";

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
`;

const BoxOrders = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 100%;
  height: 300px;
`;

const Comanda = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  border: 1pt solid black;
  border-radius: 3px;
  width: 100%;
  margin: 10px;
  padding: 10px;
  height: 600px;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 95%;
  gap: 20px;
`;

const CardItem = (props) => {
  const [token, setToken] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [options, setOptions] = useState("breakfast");
  const [menu, setMenu] = useState([]);
  const [client, setClient] = useState();
  const [table, setTable] = useState();
  const [products, setProducts] = useState([{ id: "", qtd: "" }]);

  const breakfast =
    produtos.length > 0 && produtos.filter(({ type }) => type === "breakfast");
  const lunch =
    produtos.length > 0 &&
    produtos.filter(({ sub_type }) => sub_type === "hamburguer");
  const drinks =
    produtos.length > 0 &&
    produtos.filter(({ sub_type }) => sub_type === "drinks");
  const side =
    produtos.length > 0 &&
    produtos.filter(({ sub_type }) => sub_type === "side");

  async function getItems(token) {
    try {
      const response = await fetch(
        "https://lab-api-bq.herokuapp.com/products",
        {
          method: "GET",
          headers: {
            Authorization: token,
          },
        }
      );
      const json = await response.json();
      setProdutos(json);
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }
  async function addOrders(token, client, table, products) {
    try {
      const body = {
        client,
        table,
        products: products,
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

  function InputClient({ target }) {
    setClient(target.value);
  }

  function InputTable({ target }) {
    setTable(target.value);
  }

  function handleMenu(item) {
    setMenu([...menu, item]);

    console.log(menu);
  }

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    getItems(token);
  }, [token]);

  function renderProducts(options) {
    switch (options) {
      case "breakfast":
        return breakfast ? (
          breakfast.map((item) => (
            <Item
              onClick={() => {
                handleMenu(item);
              }}
              key={item.id}
              img={item.image}
              name={item.name}
              complement={item.complement}
              price={item.price}
              flavor={item.flavor}
            />
          ))
        ) : (
          <div>Carregando...</div>
        );
      case "lunch":
        return lunch.map((item) => (
          <Item
            onClick={() => {
              handleMenu(item);
            }}
            key={item.id}
            img={item.image}
            name={item.name}
            complement={item.complement}
            price={item.price}
            flavor={item.flavor}
          />
        ));
      case "drinks":
        return drinks.map((item) => (
          <Item
            onClick={() => {
              handleMenu(item);
            }}
            key={item.id}
            img={item.image}
            name={item.name}
            complement={item.complement}
            price={item.price}
            flavor={item.flavor}
          />
        ));
      case "side":
        return side.map((item) => (
          <Item
            onClick={() => {
              handleMenu(item);
            }}
            key={item.id}
            img={item.image}
            name={item.name}
            complement={item.complement}
            price={item.price}
            flavor={item.flavor}
          />
        ));
      default:
    }
  }

  return (
    <Container>
      <div>
        <Select
          value={options}
          onChange={(e) => {
            setOptions(e.target.value);
          }}
        >
          <option value={"breakfast"}>Café da Manhã</option>
          <option value={"lunch"}>Lanches</option>
          <option value={"side"}>Acompanhamentos</option>
          <option value={"drinks"}>Bebidas</option>
        </Select>
        <CardContainer>
          {produtos.length === 0 ? (
            <div>Carregando...</div>
          ) : (
            renderProducts(options)
          )}
        </CardContainer>
      </div>
      <div>
        <Comanda>
          <div>
            <h2>Comanda</h2>
            <label>Cliente</label>
            <input onChange={InputClient} placeholder="Nome do cliente" />
            <br />
            <label>Mesa</label>
            <input onChange={InputTable} placeholder="Mesa" />
          </div>
          <div>
            <BoxOrders>
              {menu.length > 0 &&
                menu.map((item) => (
                  <div key={item.id}>
                    <span>{item.name}{"  -  "}</span>
                    <span>R${item.price.toFixed(2)}</span>
                  </div>
                ))}
            </BoxOrders>

            <p>valor total: R$....</p>
            <button
              onClick={() => {
                addOrders(token, client, table);
              }}
            >
              enviar pedido
            </button>
          </div>
        </Comanda>
      </div>
    </Container>
  );
};

export default CardItem;
