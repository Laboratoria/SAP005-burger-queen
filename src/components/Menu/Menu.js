import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./Menu.css";
import Add from "../../assets/plus.png";
// import Logo from "../../assets/logo.png";


const Menu = () => {
  const {table} = useParams();
  const tokenUser = localStorage.getItem("token");
  const [breakfast, setBreakfast] = useState([]);
  const [allDay, setAllDay] = useState([]);
  const [menus, setMenus] = useState(true);
  const [orderSummary, setOrderSummary] = useState([]);
  const [makeOrder, setMakeOrder] = useState({"client": "", "table": table, "products": []});

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
        const products = data;
        console.log(products);

        const itemBreakfast = products.filter((itens) =>
          itens.type.includes("breakfast")
        );
        setBreakfast(itemBreakfast);

        const itemAllDay = products.filter((itens) =>
          itens.type.includes("all-day")
        );
        setAllDay(itemAllDay);
      });
  }, [tokenUser]);

  return (
    <>
      <div className="main">
        <div className="main-left">
          {/* <Logo /> */}
          <div className="btn-menu">
            <button
              className="btn-menu-breakfast"
              onClick={() => setMenus(true)}
            >
              Café da Manhã
            </button>
            <button className="btn-menu-allDay" onClick={() => setMenus(false)}>
              Almoço/Jantar
            </button>
          </div>

          <div className="menu-order">
            <div className="container-order">
              <p className="item-container-p">Resumo do Pedido:</p>
            </div>
            <div className="btn-send-order">
              <buttom className="item-btn-send-order">ENVIAR PEDIDO</buttom>
            </div>
          </div>
        </div>


        <div className="main-right">
          <div className="item-main-right">
            {menus ? (
              <ul className="breakfast">
                {breakfast.map((item, index) => (
                  <li key={index} className="list-menu-breakfast">
                    <label>{`${item.name} ${Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(item.price)}`}</label>
                      {/* <img className="item-product-image" src={item.image} /> */}
                                      
                    <input
                      className="icon-button-add"
                      id={item.name}
                      type="image"
                      alt="button-add"
                      src={Add}
                      onClick={() => {
                        if (
                          !orderSummary.some(
                            (pedido) => pedido.name === breakfast[index].name
                          )
                        ) {
                          setOrderSummary([
                            ...orderSummary,
                            {
                              id: breakfast[index].id,
                              name: breakfast[index].name,
                              price: breakfast[index].price,
                              qtd: 1,
                            },
                          ]);
                        } else {
                          orderSummary.map((item, i) => {
                            if (item.name === breakfast[index].name) {
                              orderSummary[i].qtd++;
                              setOrderSummary([...orderSummary]);
                            }
                          });
                        }
                      }}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="list-menu">
                {allDay.map((item, index) => (
                  <li key={index} className="list-menu-allDay">
                    <label>{`${item.name} ${Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(item.price)}`}</label>
                    <input
                      className="icon-button-add"
                      id={item.name}
                      type="image"
                      alt="button-add"
                      src={Add}
                      name={item.id}
                      onClick={(event) => {
                        if (
                          !orderSummary.some(
                            (pedido) => pedido.name === allDay[index].name
                          )
                        ) {
                          setOrderSummary([
                            ...orderSummary,
                            {
                              id: allDay[index].id,
                              name: allDay[index].name,
                              price: allDay[index].price,
                              qtd: 1,
                            },
                          ]);
                        } else {
                          orderSummary.map((item, i) => {
                            if (item.name === allDay[index].name) {
                              orderSummary[i].qtd++;
                              setOrderSummary([...orderSummary]);
                            }
                          });
                        }
                      }}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

    </>
  );
};


export default Menu;
