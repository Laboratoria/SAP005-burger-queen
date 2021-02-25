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
const CardOrders = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  margin: 10px;
  width: 100%;
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
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 95%;
  gap: 20px;
`;

const CardItem = (props) => {
  const [token, setToken] = useState("");

  const [options, setOptions] = useState("breakfast");
  const [menu, setMenu] = useState([]); // pedidos 
  const [order, setOrder] = useState([]); // itens
  const [drinks, setDrinks] = useState([]);
  const [side, setSide] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [excludeItens, setExcludeItens] = useState([]);
  const [amount, setAmount] = useState([]);
  const [productPrice, setProductPrice] = useState([]);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setTimeout(() => {
      getItems(token);
    }, 2000);
  }, [token]);

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
      const itensBreakfast = json.filter((products) =>
        products.type.includes("breakfast")
      );
      const itensLunch = json.filter((products) =>
        products.sub_type.includes("hamburguer")
      );
      const itensSide = json.filter((products) =>
        products.sub_type.includes("side")
      );
      const itensDrinks = json.filter((products) =>
        products.sub_type.includes("drinks")
      );
      setBreakfast(itensBreakfast);
      setSide(itensSide);
      setDrinks(itensDrinks);
      setLunch(itensLunch);
    } catch (error) {
      console.log(error);
    }
  }

  async function addOrders(token, menu) {
    try {
      const response = await fetch("https://lab-api-bq.herokuapp.com/orders", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(menu),
      });
      const result = await response.json();
      setMenu({});
      setOrder([]);
      setProductPrice([]);
      setAmount([]);
      setExcludeItens([]);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  function handleClick(item) {
    setOrder([...order, item]);
    setProductPrice([...productPrice, item.price]);

    const addProducts = order.map((item) => {
      return {
        id: item.id,
        qtd: 1,
      };
    });

    const qtdProducts = addProducts.reduce( (idItem, qtdItem) =>{
      idItem[qtdItem.id] = idItem[qtdItem.id] || [];
      idItem[qtdItem.id].push(qtdItem);
      return idItem;
    }, Object.create(null));

    const list = [];
    for (const [key, value] of Object.entries(qtdProducts)) {
      list.push({
        id: key,
        qtd: value.length,
      });
    }
    setMenu({ ...menu, products: list });
    console.log(list);
    
  }

  const handlePrice = () => {
    setProductPrice(productPrice.reduce((total, num) => total + num));
  };

  const deleteItem = (item) => {
    setProductPrice(productPrice.splice(menu.indexOf(item), 1));
    setExcludeItens(menu.splice(menu.indexOf(item), 1));
    handlePrice();
  };

  const itemCard = (item, index) => (
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
  );

  function renderProducts(options) {
    switch (options) {
      case "breakfast":
        return breakfast ? (
          breakfast.map((item, index) => itemCard(item, index))
        ) : (
          <div>...Carregando</div>
        );
      case "lunch":
        return lunch.map((item, index) => itemCard(item, index));
      case "drinks":
        return drinks.map((item, index) => itemCard(item, index));
      case "side":
        return side.map((item, index) => itemCard(item, index));
      default:
    }
  }

  return (
    <Container>
      <div>
        <Select
          value={options}
          onChange={({ target }) => {
            setOptions(target.value);
          }}
        >
          <option value={"breakfast"}>Café da Manhã</option>
          <option value={"lunch"}>Lanches</option>
          <option value={"side"}>Acompanhamentos</option>
          <option value={"drinks"}>Bebidas</option>
        </Select>
        <CardContainer>{menu && renderProducts(options)}</CardContainer>
      </div>
      <div>
        <Comanda>
          <div>
            <h2>Comanda</h2>
            <label>Cliente: {"   "}</label>
            <input
              onChange={(e) => setMenu({ ...menu, client: e.target.value })}
            />
            <br />
            <br />
            <label>Mesa: </label>
            <input
              onChange={(e) => setMenu({ ...menu, table: e.target.value })}
            />
          </div>
          <div>
            <CardOrders>
              {menu.length > 0 &&
                menu.map((item, index) => (
                  <div key={index}>
                    <span>
                      {item.name}
                      {"  -  "}
                    </span>
                    <span>R${item.price.toFixed(2)} </span>
                    <button onClick={deleteItem(item)}>delete</button>
                  </div>
                ))}
            </CardOrders>

            <p>{amount}</p>
            <button
              onClick={() => {
                addOrders(token, menu);
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
