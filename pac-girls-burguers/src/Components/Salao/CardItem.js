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
  const [products, setProducts] = useState([]);
  const [options, setOptions] = useState("breakfast");
  const [menu, setMenu] = useState([]);
  const [client, setClient] = useState();
  const [table, setTable] = useState();
  const [qtd, setQtd] = useState(0);
  const [order, setOrder] = useState([]);

  const breakfast =
    products.length > 0 && products.filter(({ type }) => type === "breakfast");
  const lunch =
    products.length > 0 &&
    products.filter(({ sub_type }) => sub_type === "hamburguer");
  const drinks =
    products.length > 0 &&
    products.filter(({ sub_type }) => sub_type === "drinks");
  const side =
    products.length > 0 &&
    products.filter(({ sub_type }) => sub_type === "side");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    getItems(token);
   
  }, [token]);

  useEffect(() => {

    console.log(order);
  }, [order]);

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

      setProducts(json);
    } catch (error) {
      console.log(error);
    }
  }
  async function addOrders(token, client, table, order) {
    try {
      const body = {
        client,
        table,
        products: order,
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

  function handleClick(item) {
    console.log(item.id);
    const obj = {
      id: item.id,
      qtd:0,
    }
    setMenu([...menu, item]);
    setOrder((prevState) => [...prevState, obj]);
  }

 
// setItems(
//   items.map((item) => {
//     item.id === id ? newItem : item
//   })
// )

  function renderProducts(options) {
    switch (options) {
      case "breakfast":
        return breakfast ? (
          breakfast.map((item, index) => (
            <Item
              onClick={() => {
                handleClick(item);
              }}
              key={index}
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
        return lunch.map((item, index) => (
          <Item
            onClick={() => {
              handleClick(item);
            }}
            key={index}
            img={item.image}
            name={item.name}
            complement={item.complement}
            price={item.price}
            flavor={item.flavor}
          />
        ));
      case "drinks":
        return drinks.map((item, index) => (
          <Item
            onClick={() => {
              handleClick(item);
            }}
            key={index}
            img={item.image}
            name={item.name}
            complement={item.complement}
            price={item.price}
            flavor={item.flavor}
          />
        ));
      case "side":
        return side.map((item, index) => (
          <Item
            onClick={() => {
              handleClick(item);
            }}
            key={index}
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
          {products.length === 0 ? (
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
            <label>Cliente: {"   "}</label>
            <input
              onChange={({ target }) => {
                setClient(target.value);
              }}
            />
            <br />
            <br />
            <label>Mesa: </label>
            <input
              onChange={({ target }) => {
                setTable(target.value);
              }}
            />
          </div>
          <div>
            <BoxOrders>
              {menu.length > 0 &&
                menu.map((item, index) => (
                  <div key={index}>
                    <span>
                      {item.name}
                      {"  -  "}
                    </span>
                    <span>R${item.price.toFixed(2)} </span>
                    <button onClick={() => setQtd(qtd + 1)}>+</button>
                    <span>qtd: {qtd}</span>
                  </div>
                ))}
            </BoxOrders>

            <p>valor total: R$....</p>
            <button
              onClick={() => {
                addOrders(token, client, table, order);
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
