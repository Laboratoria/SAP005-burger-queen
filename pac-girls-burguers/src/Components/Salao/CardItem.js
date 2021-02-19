import React, { useState, useEffect } from "react";
import Item from "./Item";
//import Item from './Item'

import styled from "styled-components";
import { Select } from "../Register/register-styled";

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
    produtos.length > 0 && produtos.filter(({ type }) => type === "breakfast");
  const lunch =
    produtos.length > 0 && produtos.filter(({ sub_type }) =>  sub_type === "hamburguer");
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

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    getItems(token);
  }, [token]);

  function renderProducts(options) {
    switch (options) {
      case "breakfast":
        return breakfast.map((item) => (
          <Item
            key={item.id}
            img={item.image}
            name={item.name}
            complement={item.complement}
            price={item.price}
            flavor={item.flavor}
          />
        ));
      case "lunch":
        return lunch.map((item) => (
          <Item
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
    <>
      <Select
        value={options}
        onChange={(e) => {
          setOptions(e.target.value);
          console.log(e.target.value);
        }}
      >
        <option value={"breakfast"}>Café da Manhã</option>
        <option value={"lunch"}>Lanches</option>
        <option value={"side"}>Acompanhamentos</option>
        <option value={"drinks"}>Bebidas</option>
      </Select>
      <CardContainer>
        {produtos.length > 0 ? (
          renderProducts(options)
        ) : (
          <div>Carregando...</div>
        )}
      </CardContainer>
    </>
  );
};

export default CardItem;
