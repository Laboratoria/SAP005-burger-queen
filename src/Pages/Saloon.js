import React, { useEffect, useState } from "react";


function Saloon() {

  const [menu, setMenu] = useState([]);
  const [clientBox, setClient] = useState("");
  const [table, setTable] = useState("");
  const [products, setProducts] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => { 
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `${token}`);
  
     const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch("https://lab-api-bq.herokuapp.com/products", requestOptions) 
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setMenu(result)
      })
      .catch(error => console.log("error", error));
  }, [])

  function clientOrder(clientBox, table, products) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `${token}`);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({"client":{clientBox},"table":{table},"products":[{products}]});

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://lab-api-bq.herokuapp.com/orders", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log("error", error));
  }
    
  /*function handleSubmit (event) {
    event.preventDefault();
    clientOrder (clientBox, table, products)
  }*/
    
  return (
    <div className="saloon-page">
      <h1>Salão</h1>
        <div className="anote-pedido">
          <label>
            Cliente:
            <input type="text" value={clientBox} onChange={(event) => setClient(event.target.value)} />
          </label>
          <label>
            Mesa:
            <input type="text" value={table} onChange={(event) => setTable(event.target.value)} />
          </label>
          <label>
            Pedido:
            <input type="text" value={products} onChange={(event) => setProducts(event.target.value)} />
          </label>
        </div>

        <div className="cardapio">{
          menu.map((cardapio) => {
            return (
              <div className="products" key={cardapio.id}>
                <img className="img-product" src={cardapio.image} />
                <ul>
                  <li>{cardapio.name}</li>
                  <li>{cardapio.flavor}</li>
                  <li>{cardapio.complement}</li>
                  <li>R$ {cardapio.price}</li>
                  <li>{cardapio.type}</li>
                  <li>{cardapio.sub_type}</li>
                </ul>
              </div>
            )
          })
        }</div>
    </div>
  )
}

export default Saloon;

/*LÓGICA PARA ANOTAR PEDIDOS
  <div className="anote-pedido">
         { 
		  const validate =[]
		  const pedidOrder =[]
		

    	  const handleKitchen = (event) => {
            event.preventDefault();
            pedidOrder(clientBox, table)
    	  }


          products.length != 0 &&
          products.map((cardapio) => {

           pedidOrder.push(cardapio.id)
           validate.push(cardapio.price)
           
           const conta = validate.reduce((sum, num) => sum + num, 0)

           localStorage.setItem("order", pedidOrder)
           localStorage.setItem("total", total)
           
             return (
               <div className="anote-pedido" key={}>
                 <p>{cardapio.name} - R${cardapio.price}</p>
               </div>
            )
          })
          }
          </div>

            <div className="total-enviar">
             <p>TOTAL R$</p><p>{localStorage.getItem('total')}</p>
            </div>

            <button className="" onClick={
               (event) => handleKitchen (event)}>
                 Confirmar
              </button>
            <button className="">Cancelar</button>
          </div>
        </div>
    </div>
  );*/