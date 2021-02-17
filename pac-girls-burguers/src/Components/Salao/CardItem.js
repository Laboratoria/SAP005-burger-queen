import React, { useState, useEffect } from "react";
import Item from "./Item";
//import Item from './Item'

import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  justify-content:space-evenly;
  flex-wrap: wrap;
  max-width: 600px;
  margin: 0 auto;
`;

const CardItem = (props) => {
  const [produtos, setProdutos] = useState([]);
  const [token, setToken] = useState(""); 

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

  return (
    <CardContainer>
      {produtos.length > 0 &&
        produtos.map((item) => (
          <Item
            key={item.id}
            img={item.image}
            name={item.name}
            price={item.price}
            flavor={item.flavor}
          />
        ))}
    </CardContainer>
  );
};

export default CardItem;
