import React, { useEffect, useState } from "react";
import "./Menu.css";
import Add from "../../assets/plus.png";
import Logotipo from "../../components/Logotipo/Logotipo";
import Trash from "../../assets/trash.svg"


const Menu = () => {
  const [table, setTable] = useState ("")
  const user = localStorage.getItem("name");
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
    <div className="tables">
          <select className="select-table" name="tables" id="tables" value={table} onChange={(e) => setTable(Number(e.target.value))} >
            <option value="1">Mesa 01</option>
            <option value="2">Mesa 02</option>
            <option value="3">Mesa 03</option>
            <option value="4">Mesa 04</option>
            <option value="5">Mesa 05</option>
            <option value="6">Mesa 05</option>
            <option value="7">Mesa 07</option>
            <option value="8">Mesa 08</option>
            <option value="9">Mesa 09</option>
            <option value="10">Mesa 10</option>
          </select>
          </div>
      <div className="main">
        <div className="main-left">
          <Logotipo />
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
                  // {if(item.name === "Hambúrguer simples"){

                  // }}
                  <li key={index} className="list-menu-allDay">
                    <label>{`${item.name} ${item.flavor} ${item.complements} ${Intl.NumberFormat("pt-BR", {
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
                <p className="title-order">Resumo do Pedido</p>
                <p className="user-order">Atendente: {user}</p>

                <input className="client-order"
                    type="text"
                    placeholder="Nome do Cliente"
                    onChange={(event) => {
                        setMakeOrder({ ...makeOrder, "client": event.target.value })
                    }}
                />
                {orderSummary !== [] &&
                    <>
                        <section className="title-list-order">
                            <label>Item</label>
                            <label>Valor</label>
                            <label>Quantidade</label>
                        </section>
                        <ul className="list-order">
                            {orderSummary.map((item, index) => (
                                <>
                                    <li className="item-list-order" key={index}>
                                        <label>
                                            {typeof item.name === "string" ? item.name : item.name.map((item) => <><label>{item.name}</label> <label>{item.flavor}</label> <label>{item.complement}</label></>)}
                                            {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price * item.qtd)}
                                        </label>
                                        <input

                                            className="btn-quantity-order"
                                            id="reduce-quantity"
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
                                        <label className="qnt"> {item.qtd} </label>
                                        <input
                                            className="btn-quantity-order"
                                            id="increase-quantity"
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
                                            id="delete-item"
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

                        <p className="total-order">TOTAL: {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(sumPriceTotal(orderSummary))}</p>
                        <section className="send-order">
                            <input className="btn-send-order"
                                type="button"
                                value="Enviar Pedido"
                                onClick={() => {
                                    if (makeOrder.client !== "") {
                                        const products = orderSummary.map(produto => {
                                            return { "id": produto.id, "qtd": produto.qtd };
                                        });

                                        makeOrder.products = products;
                                        makeOrder.table = table;

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


                            <input className="btn-clean-order"
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
