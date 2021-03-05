import '../style/Historic.css';
import React from "react";
import { useHistory } from 'react-router-dom'
import logo from '../images/logo.png';
import add from '../images/add.png';
import { useState } from 'react';
import menuburguer from '../images/menuburguer.png';


function Historic() {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");
  const [status, setStatus] = useState('');
  console.log(orders);

  const history = useHistory()
  const rLogin = () => {
    history.push('/')
  }

  const rWaiter = () => {
    history.push('/Waiter')
  }

  return (

    <div className="AppHistoric">
      <input type="checkbox" id="check"></input>
      <label id="icone" for="check"><img className="btn-burguer" src={menuburguer} alt="" /></label>

      <div class="menuLateral">
        <nav>
          <a href={rWaiter}><div onClick={rWaiter} className="link">Pedido</div></a>
          <a href={rLogin}><div onClick={rLogin} className="link">Sair</div></a>
        </nav>
      </div>

      {/* <nav className="wrap-menu">
           
                <button className="btnRe" onClick={rWaiter}>
                <img src= {re} alt="" className="Re"/>
                </button>
                <button className="exit"   onClick={rLogin}>
                <img src= {exit} alt="" className="exit"/></button>   
        </nav> */}

      <header className="App-Historic">

        <img src={logo} alt="" className="logoHistoric" />
        <p className="Cozinha">Pedidos Prontos</p>

        <button className="btnAdd" onClick={(e) => {
          e.preventDefault();
          fetch('https://lab-api-bq.herokuapp.com/orders', {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "accept": "application/json",
              'Authorization': `${token}`
            }
          })
            .then((response) => response.json())
            .then((json) => {
              setOrders(json);
            })
        }}><img src={add} alt="" className='imgMenu' /></button>
      </header>

      <section className="section">

        {orders.map((order) => {

          return (
            <div key={order.id}>
              <p>Mesa: {order.table}</p>
              <div>
                <label>
                  <input
                    type="radio"
                    value="pending"
                    checked={status === "pending"}
                    onChange={() => setStatus("pending")}
                  />
                  <p>Entregue</p>
                </label>

                {
                  order.Products.map((product) => {
                    return (
                      <div key={product.id}>
                        <p>{product.name}</p>
                        <button className="food">Pedido Pronto</button>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })}
      </section>

    </div>
  );
}




export default Historic;