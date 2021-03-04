import React, { useEffect, useState } from "react";
import "./Menu.css";
import Add from "../../assets/plus.png";
import Logotipo from "../../components/Logotipo/Logotipo";
import Trash from "../../assets/trash.svg"


const Menu = () => {
  const user = localStorage.getItem("name");
  const [table, setTable] = useState ("");
  const tokenUser = localStorage.getItem("token");
  const [breakfast, setBreakfast] = useState([]);
  const [allDay, setAllDay] = useState([]);
  const [menus, setMenus] = useState(true);
  const [orderSummary, setOrderSummary] = useState([]);
  const [makeOrder, setMakeOrder] = useState({"client": "", "table": table, "products": []});
  const [errorMessage, setErrorMessage] = useState("");
  const [radioButton, setRadioButton] = useState(false);
  const [productsList, setProductsList] = useState("");
  const [extrasBurger, setExtrasBurger] = useState('');
  const [extrasDoubleBurger, setExtrasBurgerDuplo] = useState('');
  const [openExtrasBurger, setOpenExtrasBurgerSimples] = useState(false);
  const [openExtrasDoubleBurger, setOpenExtrasDoubleBurger] = useState(false);
  const [selectedBurger, setSelectedBurger] = useState({
      name: null,
      flavor: null,
      complement: null
      });
  const burgers = [{name:"carne", label:"carne"}, {name:"frango", label:"frango"}, {name:"vegetariano", label:"vegetariano"}];
  const additional = [{name:"ovo"}, {name:"queijo"}];
    
    useEffect(() => {
          fetch("https://lab-api-bq.herokuapp.com/products", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `${tokenUser}`,
            },
          })
            .then((response) => response.json())
            .then((data) => {
              const products = data;
              setProductsList(data)

              const slice1 = products.slice(0,5);
              const slice2 = products.slice(22);
              let NoRepetitionList = [];
              NoRepetitionList = NoRepetitionList.concat(slice1, products[13], slice2);
              
              const breakfastList = NoRepetitionList.slice(0,4);
              setBreakfast(breakfastList);
              const allDayList = NoRepetitionList.slice(4,12);
              setAllDay(allDayList);
          })   
      
  }, [tokenUser]);

  useEffect(() => {
  }, [radioButton])

  function extras() {
    return (
      <>
        <div className="extras">
          <section className="burger">
            <p className="title-burger">Hambúrguer</p>
            <section className="input-burger">
            {burgers.map(typeBurger => (
              <>
                <input
                  key={typeBurger.name}
                  type="radio"
                  name="option-burguer"
                  id={typeBurger.name}
                  onClick={(e) => {
                    selectedBurger.flavor = e.currentTarget.id;
                    setSelectedBurger({...selectedBurger});
                  }}
                />
                <label for={typeBurger.name}>
                {typeBurger.name}</label>
              </>
            ))}
            </section>
          </section>
            <section className="additional">
              <p className="title-additional">Adicionais R$1</p>
              <section className="input-additional">
              {additional.map((typeAdditional, index) => (
                <>
                  <input
                    key={index}
                    type="radio"
                    name="choice-additional"
                    id={typeAdditional.name}
                    onChange={(e) => {
                      selectedBurger.complement = e.currentTarget.id;
                      setSelectedBurger({...selectedBurger});
                    }}
                  />
                  <label key={index}>
                  {typeAdditional.name}</label>
                </> 
              ))}
            </section>
          </section>
        </div>

          <input 
            className="button-send"
            type="button"
            value="Pedir"
            onClick={(e) => {
              if(selectedBurger.flavor !== null) {
                productsList.filter(produto => {
                  if(produto.name === selectedBurger.name && produto.flavor === selectedBurger.flavor && produto.complement === selectedBurger.complement) {
                    setOrderSummary([...orderSummary, {"id": produto.id, "name": [{"name": produto.name, "flavor": produto.flavor, "complement": produto.complement}], "price": produto.price, "qtd": 1}]);
                  }
                  return orderSummary
                })
                setOpenExtrasBurgerSimples(false);
                setOpenExtrasDoubleBurger(false);
                      e.currentTarget.parentNode.parentNode.querySelector(".icon-button-add").classList.remove("rotate");
                setSelectedBurger({
                  name: null,
                  flavor: null,
                  complement: null
                });
              }else {
                setErrorMessage(alert("Escolha o hamburguer"));
              }
              
            }}
          />
        </>
      )
  }

  function handlerExtras(e) {
      if(e.target.id === "Hambúrguer simples"){
          if(openExtrasBurger === true){
              setOpenExtrasBurgerSimples(false);
              e.currentTarget.classList.remove("rotate");
          } else {
              e.currentTarget.classList.add("rotate");
              setExtrasBurger(extras());
              setOpenExtrasBurgerSimples(true);
          }
      }
      if(e.target.id === "Hambúrguer duplo"){
          if(openExtrasDoubleBurger === true){
              setOpenExtrasDoubleBurger(false);
              e.currentTarget.classList.remove("rotate");
          } else {
              e.currentTarget.classList.add("rotate");
              setExtrasBurgerDuplo(extras());
              setOpenExtrasDoubleBurger(true);
          }
      }
  }

  function sumPriceTotal(array) {
      return array.reduce((total, item) => total + (item.qtd*item.price), 0);
  }

  return (
    <>
    <div className="tables">
          <select className="select-table" name="tables" id="tables" value={table} onChange={(e) => setTable(Number(e.target.value))} >
            <option value="1">Mesa 01</option>
            <option value="2">Mesa 02</option>
            <option value="3">Mesa 03</option>
            <option value="4">Mesa 04</option>
            <option value="5">Mesa 05</option>
            <option value="6">Mesa 06</option>
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
              onClick={() => setMenus(true)}>
              Café da Manhã
            </button>
            <button 
            className="btn-menu-allDay" 
            onClick={() => setMenus(false)}>
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

                    <input
                      className="icon-button-add"
                      id={item.name}
                      type="image"
                      alt="button-add"
                      src={Add}
                      onClick={() => {
                        if (
                          !orderSummary.some(
                            (order) => order.name === breakfast[index].name
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
                    <label>{`${item.name} 
                      ${Intl.NumberFormat("pt-BR", {
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
                        handlerExtras(event);
                        if(item.name === "Hambúrguer simples" || item.name === "Hambúrguer duplo"){
                        selectedBurger.name = allDay[index].name;
                        setSelectedBurger({...selectedBurger});
                        } else {
                        if (
                          !orderSummary.some(
                            (order) => order.name === allDay[index].name
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
                      }
                      }}
                    />
                    {openExtrasBurger === true && item.name === "Hambúrguer simples" && <section className="menu-extras">{extrasBurger}</section>}
                    {openExtrasDoubleBurger === true && item.name === "Hambúrguer duplo" && <section className="menu-extras">{extrasDoubleBurger}</section>}
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
                                            {typeof item.name === "string" ? item.name : item.name.map((item) => 
                                            <>
                                            <label className="burger-title" >{item.name}</label> 
                                            <label className="burger-flavor" >{item.flavor}</label> 
                                            <label className="burger-complement" >{item.complement}</label>
                                            </>)}
                                            <label className="item-price">
                                            {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price * item.qtd)}
                                            </label>
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
                                            alt="icon-trash"
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
                                        const products = orderSummary.map(product => {
                                            return { "id": product.id, "qtd": product.qtd };
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
                                        setErrorMessage(alert("Preencha o nome do cliente e escolha sua mesa!"));
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
