import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./Menu.css";
import Add from "../../assets/plus.png";


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
      <section className="menu-escolha">
        <section className="buttons-menu-escolha">
          <button className="button-menu-escolha" onClick={() => setMenus(true)}>Café da Manhã</button>
          <button className="button-menu-escolha" onClick={() => setMenus(false)}>Almoço/Jantar</button>
        </section>
        {menus ? (
          <ul className="list-menu">
            {breakfast.map((item, index) => (
              <li key={index} className="list-menu-breakfast">
                <label>{`${item.name} ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}`}</label>
                <input
                  className="icon-button-add"
                  id={item.name}
                  type="image"
                  alt="button-add"
                  src={Add}
                  onClick={() => {
                    if (!orderSummary.some(pedido => pedido.name === breakfast[index].name)) {
                      setOrderSummary([...orderSummary, { "id": breakfast[index].id, "name": breakfast[index].name, "price": breakfast[index].price, "qtd": 1 }]);
                    } else {
                      orderSummary.map((item, i) => {
                        if (item.name === breakfast[index].name) {
                          orderSummary[i].qtd++;
                          setOrderSummary([...orderSummary]);
                        }
                      })
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
                  <label>{`${item.name} ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}`}</label>
                  <input
                    className="icon-button-add"
                    id={item.name}
                    type="image"
                    alt="button-add"
                    src={Add}
                    name={item.id}
                    onClick={(event) => {

                      if (!orderSummary.some(pedido => pedido.name === allDay[index].name)) {
                        setOrderSummary([...orderSummary, { "id": allDay[index].id, "name": allDay[index].name, "price": allDay[index].price, "qtd": 1 }]);
                      } else {
                        orderSummary.map((item, i) => {
                          if (item.name === allDay[index].name) {
                            orderSummary[i].qtd++;
                            setOrderSummary([...orderSummary]);
                          }
                        })
                      }
                    }
                    }
                  />
                </li>
              ))}
            </ul>
          )}
      </section>
      <section className="resumo-pedido">
      <p className="titulo-resumo-pedido">Resumo do Pedido</p>
      <p className="infos-resumo-pedido">Atendente:</p>
      <input className="cliente-resumo-pedido"
        type="text"
        placeholder="Nome do Cliente"
        onChange={(event) => {
          setMakeOrder({ ...makeOrder, "client": event.target.value })
        }}
      />
      </section>
    </>
  )
}


export default Menu;
