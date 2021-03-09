import React, { useEffect, useState } from "react";
import "./Menu.css";
import Add from "../../assets/plus.png";

const Menu = () => {
  const tokenUser = localStorage.getItem("token");
  const [breakfast, setBreakfast] = useState([]);
  const [allDay, setAllDay] = useState([]);
  const [showMenus, setShowMenus] = useState(true);
  const [orderSummary, setOrderSummary] = useState([]);
  const [burguers, setBurguers] = useState([]);
  const [burguerOption, setBurguerOption] = useState({
    name: null,
    flavor: null,
    complement: null,
  });
  const [products, setProducts] = useState([]);
  const [sendOrder, setSendOrder] = useState({
    "client": "",
    "table": "",
    "products": []
  });

  useEffect(() => {
    fetch("https://lab-api-bq.herokuapp.com/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${tokenUser}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(products);

        const itemBreakfast = data.filter((itens) =>
          itens.type.includes("breakfast")
        );
        setBreakfast(itemBreakfast);

        const itemAllDay = data.filter((itens) =>
          itens.type.includes("all-day")
        );
        setAllDay(itemAllDay);

        const itemBurguer = [data[4], data[13]];
        setBurguers(itemBurguer);
      });
  }, [tokenUser]);

  useEffect(() => {
    console.log(burguerOption);
    console.log(orderSummary);
  }, [burguerOption, orderSummary]);

  const flavorsBurguers = (flavor, name) => {
    burguerOption.flavor = flavor;
    burguerOption.name = name;
    setBurguerOption({ ...burguerOption });
  };

  const complementsBurguers = (complement) => {
    burguerOption.complement = complement;
    setBurguerOption({ ...burguerOption });
  };

  return (
    <>
      <section>
        <button onClick={() => setShowMenus(true)}>Café da Manhã</button>

        <button onClick={() => setShowMenus(false)}>Almoço/ Jantar</button>
      </section>

      {showMenus ? (
        <>
          <h1>CAFÉ DA MANHÃ</h1>
          {breakfast.map((item, index) => (
            <>
              <p>{item.name}</p>
              <button
                onClick={() =>
                  setOrderSummary([...orderSummary, breakfast[index]])
                }
              >
                Adicionar
              </button>
            </>
          ))}
          <hr />
        </>
      ) : (
        <>
          <h1>HAMBURGUERES</h1>
          {burguers.map((item, index) => (
            <section>
              <p>
                {item.name}{" "}
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(item.price)}
              </p>
              <section>
                <p>Escolha uma carne?</p>
                <input
                  type="radio"
                  id="carne"
                  name={item.name}
                  onClick={() => flavorsBurguers("carne", item.name)}
                />
                <label htmlFor="carne"> Carne</label>

                <input
                  type="radio"
                  id="frango"
                  name={item.name}
                  onClick={() => flavorsBurguers("frango", item.name)}
                />
                <label htmlFor="frango"> Frango</label>

                <input
                  type="radio"
                  id="vegetariano"
                  name={item.name}
                  onClick={() => flavorsBurguers("vegetariano", item.name)}
                />
                <label htmlFor="vegetariano"> Vegetariano</label>
              </section>

              <section>
                <p>Adicional R$ 1,00</p>
                <input
                  type="radio"
                  id="ovo"
                  name={item.id}
                  onClick={() => complementsBurguers("ovo")}
                />
                <label htmlFor="ovo"> Ovo</label>

                <input
                  type="radio"
                  id="queijo"
                  name={item.id}
                  onClick={() => complementsBurguers("queijo")}
                />
                <label htmlFor="queijo"> Queijo</label>
              </section>

              <button
                onClick={() => {
                  products.filter((product) => {
                    if (
                      product.name === burguerOption.name &&
                      product.flavor === burguerOption.flavor &&
                      product.complement === burguerOption.complement
                    ) {
                      setOrderSummary([...orderSummary, product]);
                    }
                  });
                }}
              >
                Adicionar
              </button>
            </section>
          ))}
          <hr />

          <h1>ACOMPANHAMENTOS</h1>
          {allDay.map((item, index) => (
            <section>
              {item.sub_type === "side" ? (
                <>
                  <p>
                    {item.name}{" "}
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(item.price)}
                  </p>
                  <button
                    onClick={() =>
                      setOrderSummary([...orderSummary, allDay[index]])
                    }
                  >
                    Adicionar
                  </button>
                </>
              ) : null}
            </section>
          ))}
          <hr />

          <h1>BEBIDAS</h1>
          {allDay.map((item, index) => (
            <section>
              {item.sub_type === "drinks" ? (
                <>
                  <p>
                    {item.name}{" "}
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(item.price)}
                  </p>
                  <button
                    onClick={() =>
                      setOrderSummary([...orderSummary, allDay[index]])
                    }
                  >
                    Adicionar
                  </button>
                </>
              ) : null}
            </section>
          ))}
        </>
      )}
      <p>Resumo do Pedido</p>
      {orderSummary.map((order) => (
        <p>
          {order.name} {order.complement} {order.flavor}{" "}
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(order.price)}
        </p>
      ))}
      <p>
        TOTAL:{" "}
        {Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(
          orderSummary.reduce((total, item) => total + item.price, 0)
        )}{" "}
      </p>
      <button onClick={() => {
        const products = orderSummary.map(order => {
          return {"id": order.id, "qtd": 1}
        })
        sendOrder.products = products;
        fetch("https://lab-api-bq.herokuapp.com/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${tokenUser}`,
          },
          body: JSON.stringify(sendOrder)
        })
          .then((response) => response.json())
          .then(data => console.log(data))

      }}>Enviar Pedido</button>
    </>
  );
};

export default Menu;
