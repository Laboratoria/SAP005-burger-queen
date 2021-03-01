import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./Menu.css";
import Add from "../../assets/plus.png";
// import Logo from "../../assets/logo.png";
import Trash from "../../assets/trash.svg"


const Menu = () => {
  const {table} = useParams();
  const tokenUser = localStorage.getItem("token");
  const [breakfast, setBreakfast] = useState([]);
  const [allDay, setAllDay] = useState([]);
  const [menus, setMenus] = useState(true);
  const [orderSummary, setOrderSummary] = useState([]);
  const [makeOrder, setMakeOrder] = useState({"client": "", "table": table, "products": []});
  const [errorMessage, setErrorMessage] = useState("");


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

  function sumPriceTotal(array) {
    return array.reduce((total, item) => total + (item.qtd*item.price), 0);
};

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

        <section className="container-order">
                <p className="titulo-resumo-pedido">Resumo do Pedido</p>
                <p className="infos-resumo-pedido">Atendente: </p>
                <input className="client-order"
                    type="text"
                    placeholder="Nome do Cliente"
                    onChange={(event) => {
                        setMakeOrder({ ...makeOrder, "client": event.target.value })
                    }}
                />
                {orderSummary !== [] &&
                    <>
                        <section className="titulo-lista-pedido">
                            <label>Item/Valor</label>
                            <label>Quantidade</label>
                        </section>
                        <ul className="lista-pedido">
                            {orderSummary.map((item, index) => (
                                <>
                                    <li className="item-lista-pedido" key={index}>
                                        <label>
                                            {typeof item.name === "string" ? item.name : item.name.map((item) => <><label>{item.name}</label> <label>{item.flavor}</label> <label>{item.complement}</label></>)}
                                            {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price * item.qtd)}
                                        </label>
                                        <input
                                            className="button-manipular-qtd"
                                            id="diminuir-qtd"
                                            type="button"
                                            value="-"
                                            onClick={() => {
                                                if (item.qtd > 1 && item.name === orderSummary[index].name) {
                                                    orderSummary[index].qtd--;
                                                    setOrderSummary([...orderSummary]);
                                                } else if (item.name === orderSummary[index].name && item.qtd === 1) {
                                                    orderSummary.splice(index, 1);
                                                    setOrderSummary([...orderSummary]);
                                                }
                                            }}
                                        />
                                        <label>{item.qtd}</label>
                                        <input
                                            className="button-manipular-qtd"
                                            id="aumentar-qtd"
                                            type="button"
                                            value="+"
                                            onClick={() => {
                                                if (item.name === orderSummary[index].name) {
                                                    orderSummary[index].qtd++;
                                                    setOrderSummary([...orderSummary]);
                                                }
                                            }}
                                        />
                                        <input
                                            className="icon-button-delete"
                                            id="excluir-item"
                                            type="image"
                                            src={Trash}
                                            alt="icone-lixeira"
                                            onClick={() => {
                                                orderSummary.splice(index, 1);
                                                setOrderSummary([...orderSummary]);
                                            }}
                                            
                                        />
                                    </li>
                                </>
                            ))}
                        </ul>
                        <p className="total-resumo-pedido">TOTAL: {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(sumPriceTotal(orderSummary))}</p>
                        <section className="buttons-resumo-pedido">
                            <input className="button-resumo-pedido"
                                type="button"
                                value="Enviar Pedido"
                                onClick={() => {
                                    if (makeOrder.client !== "") {
                                        const products = orderSummary.map(produto => {
                                            return { "id": produto.id, "qtd": produto.qtd };
                                        });

                                        makeOrder.products = products;

                                        const requestOptions = {
                                            method: 'POST',
                                            headers: {
                                                'Content-Type': 'application/json',
                                                'Authorization': `${tokenUser}`,
                                            },
                                            body: JSON.stringify(makeOrder),
                                        };

                                        fetch('https://lab-api-bq.herokuapp.com/orders', requestOptions)
                                            .then(response => response.json())
                                            .then(data => {
                                                if (data.id !== undefined) {
                                                    console.log(data);
                                                    setOrderSummary([]);
                                                    document.querySelector(".client-order").value = "";
                                                } else {
                                                    setErrorMessage(`${data.message}`)
                                                }
                                            })
                                    } else {
                                        setErrorMessage("Preencha o nome do cliente!");
                                    }
                                }}
                            />

                            <input className="button-resumo-pedido"
                                type="button"
                                value="Limpar Pedido"
                                onClick={() => {
                                    setOrderSummary([]);
                                }}
                            />
                        </section>
                    </>
                }
            </section>
      </div>
    </>
  );
};


export default Menu;
