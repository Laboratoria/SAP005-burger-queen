import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logoburger from '../../img/logoburger.png';
import './Lounge.css'

export const CreateOrder = () => {
  const [client, setClient] = useState('');
  const [table, setTable] = useState('');
  const handleClient = (event) => {
    setClient(event.target.value);
  }
  const  handleTable= (event) => {
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

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvYmVydGFAYm5tLmNvbSIsImlkIjo2MDgsImlhdCI6MTYxMzY1OTQ4MSwiZXhwIjoxNjQ1MjE3MDgxfQ.4IK5_6Iz6q4cTqrKhU1q4_gXvefTAh75U_3aH8mxDZc");
  myHeaders.append("Content-Type", "application/json");

  //var raw = "";

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    //body: raw,
    redirect: 'follow'
  };

  fetch("https://lab-api-bq.herokuapp.com/products", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  const handleSendKitchen = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkthcmluYUBibm0uY29tIiwiaWQiOjMzNCwiaWF0IjoxNjEzMzQ3OTcwLCJleHAiOjE2NDQ5MDU1NzB9.a74Ol9lGMuWmk8zg6qMwh5nWn0cFwjnzBW52dc0V0xY");

    var raw = JSON.stringify({ "client": client, "table": table, "products": [{ "id": 29, "qtd": 1 }, { "id": 30, "qtd": 1 }, { "id": 40, "qtd": 1 }] });

    var requestOptions = {
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



  return (
    <div className="container">
      <header>
        <img src={logoburger} className="logoburger" alt="logoburger" />
        <h1>MENU</h1>
      </header>
      <h1>Criar Pedido</h1>
      <div className="row">
        <div className="col">
        <input type="text" class="form-control" placeholder="Cliente" aria-label="Cliente" onChange={handleClient}
            value={client}
            required/>
        </div>
        <div className="col">
        <input type="text" class="form-control" placeholder="Mesa" aria-label="Mesa" onChange={handleTable}
            value={table}
            required/>
        </div>
      </div>
      <button id="back-btn" onClick={BackBtn}>Voltar</ button>
      <button className="btn" onClick={handleSendKitchen}>Enviar para cozinha</ button>
    </div>

  )

};
