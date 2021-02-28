import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import logoburger from '../../img/logoburger.png';

import './Lounge.css'

export const CreateOrder = () => {
  //const [client, setClient] = useState('');
  //const [table, setTable] = useState('');
  let token = localStorage.getItem('token')
  const [breakfastMenu, setBreakfastMenu] = useState([]);
  const [allDayMenu, setAllDayMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState([0]);
  const [orderSummary, setOrderSummary] = useState([]);
  //const [orderProducts, setOrderProducts] = useState([]);
  const [order, setOrder] = useState({});
  const [productsPrice, setProductsPrice] = useState([]);
  //const [placeOrder, setplaceOrder] = useState({ "table": table });

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

        setLoading(false);
      })

  }, [token]);


  const handleAdd = (products) => {
    setOrderSummary([...orderSummary, products]);
    setProductsPrice([...productsPrice, products.price]);
    const productsApi = orderSummary.map((products) => {
      return {
        id: products.id,
        qtd: 1,
      };
    });
    console.log('productsApi', productsApi)
    const handleSum = () => {
      setTotalPrice(productsPrice.reduce((total, num) => total + num));
      console.log('productsPrice', productsPrice)
    };

    const qtd = productsApi.reduce(function (r, a) {
      console.log('r', r)
      r[a.id] = r[a.id] || [];
      r[a.id].push(a);
      return r;
    }, Object.create(null));
    console.log('qtd', qtd)

    const arrayProducts = [];
    console.log('arrayProducts', arrayProducts)
    for (const [key, value] of Object.entries(qtd)) {
      arrayProducts.push({
        id: key,
        qtd: value.length,
      });
    }

    setOrder({ ...order, products: arrayProducts });

  };

  const handleSum = () => {
    setTotalPrice(productsPrice.reduce((total, num) => total + num));
    console.log('productsPrice', productsPrice)
  };

  const handleSendKitchen = (event) => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token);
    console.log(order)
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
        setTotalPrice([0]);
        setProductsPrice([]);
        //setOrderProducts([]);
      }
      )
      .catch(error => console.log('error', error));
  }

  //React.useEffect(() => {
  //console.log(orderSummary);
  //console.log(placeOrder)
  //console.log(totalPrice);
  //}, [totalPrice, orderSummary /*placeOrder*/])//

  return (
    <div className='container'>
      <header>
        <img src={logoburger} className="logoburger" alt="logoburger" />
        <h1>MENU</h1>
      </header>
      <h1>Criar Pedido</h1>
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
              <table className="menuList">
                <tbody>
                  <tr>
                    <th>Produto</th>
                    <th>Complemento</th>
                    <th></th>
                    <th>Preço</th>
                  </tr>

                  {orderSummary.map((products, index) => (
                    <tr key={index}>
                      <td>{products.name}</td>
                      <td>{products.flavor === 'null' ? '' : products.flavor}</td>
                      <td>{products.complement === 'null' ? '' : products.complement}</td>
                      <td>R${products.price}</td>
                    </tr>
                  ))}
                  <th>TOTAL: R${totalPrice}</th>
                  <th>
                  <button className="btn" onClick={() => handleSum()}>SOMAR</button>
                  </th>
                  
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
        <button id="back-btn"  className="btn" onClick={BackBtn}>Voltar</ button>
        </th>
        <th>
        <button className="btn" onClick={handleSendKitchen}>Enviar para cozinha</button>
        </th>
        </tbody>
      </table> 
    </>)}
    </div>
  

  )
};
