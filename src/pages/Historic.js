import '../style/Historic.css';
import React from "react";
import {useHistory} from 'react-router-dom'
import logo from '../images/logo.png';
import menuburguer from '../images/menuburguer.png';
import add from '../images/add.png';
import del from '../images/del.png';
import { useState } from 'react';

function Historic() {
    const [orders, setOrders] = useState([]);
    const token = localStorage.getItem("token"); 
    const history = useHistory()
    const rLogin=()=> {
      history.push('/')
    }

    const rWaiter=()=> {
        history.push('/Waiter')
      }

      function post (e){
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
                  setOrders (json);
                })
      }

      function delet (e, id, index){
        fetch(`https://lab-api-bq.herokuapp.com/orders/${id}`, {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json",
                    'Authorization': `${token}`
                  }        
                      })
                        .then((response) => response.json())
                        .then((json) => {
                        const newOrders= [...orders]
                        newOrders.splice(index, 1)
                        setOrders(newOrders)})
      }

    return (

      <div className="AppHistoric">

        <div className="nav1">
          <input type="checkbox" id="check"></input>
          <label id="icone" for="check"><img className="btn-burguer" src={menuburguer} alt="" /></label>

          <div class="menuLateral">
            <nav>
              <a href={rWaiter}><div onClick={rWaiter} className="link">Voltar</div></a>
              <a href={rLogin}><div onClick={rLogin} className="link">Sair</div></a>
            </nav>
          </div>
        </div>

        

        <header className="App-Historic">
  
          <img src= {logo} alt="" className="logoHistoric"/>
          <p className="Cozinha">Histórico de Pedidos</p>     
          <section>
            <button className="btnAddH"   onClick={(e)=>{
              post(e)}}><img src= {add} alt="" className='imgMenu' /></button>
          </section>
        </header>
        
       <section className="sectionH">

          { orders.map((order, index) => {

            return (
              <div className="H" key={order.id}>
                <p className="btnLabel">
                <label className="entregue">
                    <input
                      type="radio"
                      onChange={() => ("Entregue")}
                 /> Entregue </label>

               <button className="btnDel"   onClick={(e)=>{
                delet(e, order.id, index)
                 }}><img src= {del} alt="" className='imgDel' /></button> 
                </p> 

                <p  className="tbleH">Mesa: {order.table}</p> 
                <p className="pedidoH">{order.status}</p>
                <div>
                
                  {
                    order.Products.map((product)=> {
                      return(
                        <div key={product.id}> 
                        <p className="prodH">{product.name}</p>
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