import React, { useState, useEffect } from "react";
import Item from "./Item";
//import Item from './Item'

import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 600px;
  margin: 0 auto;
`;

const CardItem = (props) => {
  const [produtos, setProdutos] = useState([]);
  const [token, setToken] = useState("");
  const [options, setOptions] = useState("");

  const breakfast =
    produtos.length > 0 &&
    produtos.filter((item) => item.sub_type === "breakfast");
  const hamburguer =
    produtos.length > 0 &&
    produtos.filter((item) => item.sub_type === "hamburguer");
  const drinks =
    produtos.length > 0 &&
    produtos.filter((item) => item.sub_type === "drinks");
  const side =
    produtos.length > 0 && produtos.filter((item) => item.sub_type === "side");

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

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    getItems(token);
  }, [token]);

  function renderProducts(options) {
    switch (options) {
      case "Hamburguer":
        return hamburguer.map((item) => (
          <Item
            key={item.id}
            img={item.image}
            name={item.name}
            price={item.price}
            flavor={item.flavor}
          />
        ));
      case "Breakfast":
        return breakfast.map((item) => (
          <Item
            key={item.id}
            img={item.image}
            name={item.name}
            price={item.price}
            flavor={item.flavor}
          />
        ));
      case "Side":
        return side.map((item) => (
          <Item
            key={item.id}
            img={item.image}
            name={item.name}
            price={item.price}
            flavor={item.flavor}
          />
        ));
      case "Drinks":
        return drinks.map((item) => (
          <Item
            key={item.id}
            img={item.image}
            name={item.name}
            price={item.price}
            flavor={item.flavor}
          />
        ));
      default:
    }
  }

  return (
    <>
      <CardContainer>
        <select
          value={options}
          onChange={(e) => {
            setOptions(e.target.value);
            console.log(e.target.value);
          }}
        >
          <option value={"Hamburguer"}>Hamburguers</option>
          <option value={"Breakfast"}>Café da Manhã</option>
          <option value={"Side"}> Acompanhamentos</option>
          <option value={"Drinks"}>Bebidas</option>
        </select>
       { renderProducts(options)}
      </CardContainer>
    </>
  );
};

export default CardItem;
