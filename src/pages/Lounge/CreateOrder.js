import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logoburger from '../../img/logoburger.png';
import add from '../../img/add.png';
import './Lounge.css'

export const CreateOrder = () => {
  const [client, setClient] = useState('');
  const [table, setTable] = useState('');
  let token = localStorage.getItem('token')
  const [breakfastMenu, setBreakfastMenu] = useState([]);
  const [allDayMenu, setAllDayMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState([0]);
  const [orderSummary, setOrderSummary] = useState([]);
  const [orderProducts, setOrderProducts] = useState([]);
  const [order, setOrder] = useState({});
  const [productsPrice, setProductsPrice] = useState([]);
  const [placeOrder, setplaceOrder] = useState({ "table": table });

  const [menus, setMenus] = useState(true);

  const handleClient = (event) => {
    setClient(event.target.value);
  }
  const handleTable = (event) => {
    setTable(event.target.value);
  };
  const route = useHistory();
  const loungeRoute = () => {
    route.push('/Lounge')
  }

  function BackBtn(event) {
    event.preventDefault();
    loungeRoute();
  }
  const handleSum = () => {
    setTotalPrice(productsPrice.reduce((total, num) => total + num));
  };
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
        setBreakfastMenu(breakfast);
        const allDay = typeProducts.filter((products) =>
          products.type.includes("all-day")
        );
        setAllDayMenu(allDay)

        setLoading(false);
      })

  }, [token]);

  const handleSendKitchen = (event) => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", token);

    const raw = JSON.stringify({ "client": client, "table": table, "products": [{ "id": 29, "qtd": 1 }, { "id": 30, "qtd": 1 }, { "id": 40, "qtd": 1 }] });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://lab-api-bq.herokuapp.com/orders", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  const handleAdd = (products) => {
    setOrderSummary([...orderSummary, products]);
    setProductsPrice([...productsPrice, products.price]);
    const productsApi = orderSummary.map((products) => {
      return {
        id: products.id,
        qtd: 1,
      };
    });

    const qtd = productsApi.reduce(function (r, a) {
      r[a.id] = r[a.id] || [];
      r[a.id].push(a);
      return r;
    }, Object.create(null));

    const arrayProducts = [];
    for (const [key, value] of Object.entries(qtd)) {
      arrayProducts.push({
        id: key,
        qtd: value.length,
      });
    }

    setOrder({ ...order, products: arrayProducts });
    alert(products.name + 'adicionado!');
  };


  React.useEffect(() => {
    console.log(orderSummary);
    console.log(placeOrder)
    console.log(totalPrice);
  }, [totalPrice, orderSummary, placeOrder])

  return (
    <div className="container">
      <header>
        <img src={logoburger} className="logoburger" alt="logoburger" />
        <h1>MENU</h1>
      </header>
      <h1>Criar Pedido</h1>
      <div className="row">
        <div className="col">
          <input type="text" className="form-control" placeholder="Cliente" aria-label="Cliente" onChange={handleClient}
            value={client}
            required />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Mesa" aria-label="Mesa" onChange={handleTable}
            value={table}
            required />
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
                  <ul className="menuList">
                    {allDayMenu.map((products) => (
                      <li key={products.id}>
                        <p>{`${products.name + ' ' + products.flavor}
                         R$${products.price}`}</p>
                        <input
                          className="add-btn"
                          id={products.name}
                          type="image"
                          alt="add-button"
                          src={add}


                          name={products.id}
                          onClick={(event) => {

                          }}
                        />

                      </li>
                    ))}
                  </ul>
                )}

              {orderSummary !== [] && <>
                {orderSummary.map((item, products) => (
                  <div key={products}>
                    <p>{item.name}</p>
                    <p>R${item.price}</p>
                  </div>
                ))}
                <button onClick={() => handleSum()}>SOMAR</button>
                <p>TOTAL: R${totalPrice}</p>

                <input
                  className="btn"
                  type="button"
                  value="Excluir pedido"
                  onClick={() => {
                    setTotalPrice([0]);
                    setOrderSummary([]);
                    setOrderProducts([]);
                  }}
                />
              </>
              }

            </>
          )
        }



      </div>
      <button id="back-btn" onClick={BackBtn}>Voltar</ button>
      <button className="btn" onClick={handleSendKitchen}>Enviar para cozinha</button>
    </div>

  )

};
