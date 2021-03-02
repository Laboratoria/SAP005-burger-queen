import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header.js';
import './Lounge.css'

export const CreateOrder = () => {
  
  const token = localStorage.getItem('token')
  const [breakfastMenu, setBreakfastMenu] = useState([]);
  const [allDayMenu, setAllDayMenu] = useState([]);
  //const [sideMenu, setSideMenu] = useState([]);
  //const [drinksMenu, setDrinksMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState([0]);
  const [orderSummary, setOrderSummary] = useState([]);
  const [order, setOrder] = useState({});
  const [productsPrice, setProductsPrice] = useState([]);
  
  const [excludedProduct, setExcludedProduct] = useState([]);

  const [menus, setMenus] = useState(true);

  const handleClient = (event) => {
    setOrder({ ...order, client: event.target.value });
  }
  const handleTable = (event) => {
    setOrder({ ...order, table: event.target.value });
  };

  const route = useHistory();
  const loungeRoute = () => {
    route.push('/Lounge')
  }

  function BackBtn(event) {
    event.preventDefault();
    loungeRoute();
  }

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://lab-api-bq.herokuapp.com/products", requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const typeProducts = data;
        const breakfast = typeProducts.filter((products) =>
          products.type.includes("breakfast")
        );
        console.log('breakfast', breakfast)
        setBreakfastMenu(breakfast);
        console.log('breakfast no set', breakfast)

        const allDay = typeProducts.filter((products) =>
          products.type.includes("all-day")
        );
        console.log('allDay', allDay)
        setAllDayMenu(allDay)
        console.log('allDay setado', allDay)

        //const sideMenu = typeProducts.filter((products) =>
        // products.sub_type.includes("side")
        //);
        //setSideMenu(sideMenu);

        //const drinksMenu = typeProducts.filter((products) =>
        //  products.sub_type.includes("drinks")
        //);
        //setDrinksMenu(drinksMenu);

        setLoading(false);
      })

  }, [token]);


  const handleAdd = (products) => {
    const newOrder = [...orderSummary, products]
    const newProductsPrice= [...productsPrice, products.price]
    setOrderSummary(newOrder);
    setProductsPrice(newProductsPrice);
    const productsApi = newOrder.map((products) => {
      return {
        id: products.id,
        qtd: 1,
      };
    });
    console.log('productsApi', productsApi)

    const qtdProducts = productsApi.reduce(function (idItem, qtdItem) {
      console.log('idItem', idItem)
      idItem[qtdItem.id] = idItem[qtdItem.id] || [];
      idItem[qtdItem.id].push(qtdItem);
      return idItem;
    }, Object.create(null));
    
    console.log('qtdProducts', qtdProducts)

    const arrayProducts = [];
    console.log('arrayProducts', arrayProducts)
    for (const [key, value] of Object.entries(qtdProducts)) {
      arrayProducts.push({
        id: key,
        qtd: value.length,
      });
    }

    setOrder({ ...order, products: arrayProducts });
    
  };
  

  const handleDeleteProducts = (products) => {
    setTotalPrice(productsPrice.splice(orderSummary.indexOf(products), 1));
    setExcludedProduct(orderSummary.splice(orderSummary.indexOf(products), 1));
    handleSum();
  };

  const handleSum = () => {
    setTotalPrice(productsPrice.reduce((total, num) => total + num, 0));
    console.log('productsPrice', productsPrice)
  };

  const handleSendKitchen = (event) => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token);
    console.log('order',order)
    const raw = JSON.stringify(order);
    console.log('raw', raw)
    console.log('order', order)

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://lab-api-bq.herokuapp.com/orders", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setOrder({});
        setOrderSummary([]);
        setTotalPrice([]);
        setProductsPrice([]);
        setExcludedProduct([]);
        
      }
      )
      .catch(error => console.log('error', error));
  }

  /*React.useEffect(() => {
  console.log(orderSummary);
  console.log(placeOrder)
  console.log(totalPrice);
  }, [totalPrice, orderSummary])*/

   return (
    <>
      <Header />
     
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" placeholder="Cliente" aria-label="Cliente" onChange={handleClient}

              required />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Mesa" aria-label="Mesa" onChange={handleTable}

              required />
          </div>
        </div>
        {loading ?
          (
            <p>Carregando</p>
          ) : (
            <>

              <button onClick={() => setMenus(true)}>Café da Manhã</button>

              <button onClick={() => setMenus(false)}>Comum</button>

              {menus ? (
                <table className="menuList">
                  <tbody>
                    <tr>
                      <th>Produto</th>
                      <th>Preço</th>
                    </tr>
                    {breakfastMenu.map((products) => (
                      <tr key={products.id}>
                        <td>{products.name}</td>
                        <td> R${products.price}</td>
                        <td>
                          <button
                            onClick={() => {
                              handleAdd(products)
                            }}>+</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                  <table className="menuList">
                    <tbody>
                      <tr>
                        <th>Produto</th>
                        <th>...</th>
                        <th>Preço</th>
                      </tr>
                      {allDayMenu.map((products) => (
                        <tr key={products.id}>
                          <td>{products.name + ' ' + products.flavor}</td>
                          <td>{products.complement === 'null' ? '' : products.complement}</td>
                          <td>R${products.price}</td>
                          <td>
                            <button
                              onClick={() =>
                                handleAdd(products)}>+
                          </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}

              <table className="order">
                <tbody>
                  <thead>
                    <tr>
                      <th colspan='4'><h1>Comanda</h1></th>
                    </tr>
                  </thead>
                  <tr>
                    <th>Produto</th>
                    <th>Complemento</th>
                    <th></th>
                    <th>Preço</th>
                  </tr>
                  {orderSummary !== [] && <>
                    {orderSummary.map((products, index) => (
                      <tr key={index}>
                        <td>{products.name}</td>
                        <td>{products.flavor === 'null' ? '' : products.flavor}</td>
                        <td>{products.complement === 'null' ? '' : products.complement}</td>
                        <td>R${products.price}</td>
                        <td>
                          <button onClick={() => handleDeleteProducts(products)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th>
                        <button className="btn" onClick={() => handleSum()}>SOMAR</button>
                      </th>
                    </tr>
                    <tr>
                      <th></th>
                      <th></th>
                      <th>TOTAL:</th>
                      <th> R${totalPrice}</th>
                    </tr>
                    <tr>


                      <th>
                        <button
                          className="btn"
                          type="button"
                          value="Excluir pedido"
                          onClick={() => {
                            setTotalPrice([0]);
                            setOrderSummary([]);
                            //setOrderProducts([]);
                          }}>
                          excluir comanda</button>
                      </th>
                      <th>
                        <button id="back-btn" className="btn" onClick={BackBtn}>Voltar</ button>
                      </th>
                      <th>
                        <button className="btn" onClick={handleSendKitchen}>Enviar para cozinha</button>
                      </th>
                    </tr>
                  </>
                  }
                </tbody>
              </table>
            </>)}
    
    
    </>


  )
};
