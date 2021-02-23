import { React, useState } from "react";
import "./Hall.css";
import { useHistory } from "react-router-dom";
import {} from "react-icons/md";
import Header from "../../components/Header/Header.js";
import Button from "../../components/Button/Button.js";
import Input from "../../components/Input/Input.js";

const Hall = () => {
  const history = useHistory();

<<<<<<< HEAD
    const [client, setClient] = useState('');
    const [menu, setMenu] = useState([]);
    const [table, setTable] = useState('');
=======
  const [client, setClient] = useState("");
  const [menu, setMenu] = useState([]);
  const [table, setTable] = useState("");
  const [order, setOrder] = useState([]);
>>>>>>> fc8213de9ead88b146a9e08daa4eac16a2268757

  let token = localStorage.getItem('token');

<<<<<<< HEAD
    }
=======
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization", token
  );

  
  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
>>>>>>> fc8213de9ead88b146a9e08daa4eac16a2268757

  fetch("https://lab-api-bq.herokuapp.com/products", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  const breakfast = () => {};

  const burger = () => {};

  const sendKitchen = () => {};

<<<<<<< HEAD
    return (
        <>
        <div className="hall-lab">
        <Header/>
        </div>
            <div className="hall-page">
                <div className="hall-left">
                    <div className="button-breakfast">
                        <Button onClick={(e) => { e.preventDefault(); breakfast() }}
                            children='Menu café da manhã'/>
                        
                    </div>

                    <div className="button-burger">
                        <Button onClick={(e) => { e.preventDefault(); burger() }}
                            children='Menu hamburguers'/>
                    </div>

                    <div className='pedido'>
                    </div>

                    <div className='menu'>
                        <div className='item-menu'>
                        </div>
                    </div>

                    <div className="button-send">
                    <Button onClick={(e) => { e.preventDefault(); sendKitchen() }}
                    children='Enviar Pedido'/>
                    </div>
                    {/* 
=======
  return (
    <>
      <div className="hall-lab">
        <Header />
      </div>
      <div className="hall-page">
        <div className="hall-left">
          <div className="button-breakfast">
            <Button
              onClick={(e) => {
                e.preventDefault();
                breakfast();
              }}
              children="Menu - Café da manhã"
            />
          </div>

          <div className="button-burger">
            <Button
              onClick={(e) => {
                e.preventDefault();
                burger();
              }}
              children="Menu - Burgers"
            />
          </div>

          <div className="pedido"></div>

          <div className="button-send">
            <Button
              onClick={(e) => {
                e.preventDefault();
                sendKitchen();
              }}
              children="Enviar Pedido"
            />
          </div>
          {/* 
>>>>>>> fc8213de9ead88b146a9e08daa4eac16a2268757
            <div className="client-name">
            <Input
                type="name"
                placeholder="Nome do cliente"
                required value={client}
                onChange={(e) => setClient(e.target.value)} />
            </div> */}
        </div>
      </div>
    </>
  );
};

export default Hall;
