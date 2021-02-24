import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


function Saloon() {

  const [menu, setMenu] = useState([]);
  const [clientBox, setClient] = useState("");
  const [table, setTable] = useState("");
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");
  const history = useHistory();
  const [counter, setCounter] = useState(0);
  const [itensMenu, setItens] = useState([]);

  function logout() {
    localStorage.clear();
    history.push("/");
  }

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

		const raw = JSON.stringify({ "client":{clientBox}, "table":{table}, "products":[ { products } ] });

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
	
	function handleClick (itens){
		setItens([...itensMenu, itens]);
		const obj = {
			id: itens.id,
			qtd: 0,
		};
		
		products.map((i) => {
			if(itens.id === i.id){
				obj.qtd = obj.qtd + 1
				console.log("esse produto já existe!");
			}
		})
		setProducts((prevState) => [...prevState, obj]);
		console.log(products);
		console.log(itensMenu);

	}

    /*function handleSubmit (event) {
    event.preventDefault();
    clientOrder (clientBox, table, products)
  }*/
    
  return (
    <div className="saloon-page">
      <h1>Salão</h1>
      <button onClick={(event) => logout(event)}>Sair</button>
        <div className="anote-pedido">
          <label>
            Cliente:
            <input type="text" value={clientBox} onChange={(event) => setClient(event.target.value)} />
          </label>
          <label>
            Mesa:
            <input type="text" value={table} onChange={(event) => setTable(event.target.value)} />
          </label>
        </div>

        <div className="cardapio">{
          menu.map((cardapio, index) => {
            return (
              <div className="products" key={index}>
				  <ul>
      				<div>
       				 <button disabled={counter === 0} onClick={() => setCounter(counter - 1)}>-</button>
						<li>{counter}</li>
						<button onClick={() => setCounter(counter + 1)}>+</button>
						</div>
	 				 </ul>
                <ul onClick = {() => {handleClick(cardapio)}}>
					
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
        }
		</div>
		<div>{
			itensMenu.length > 0 &&
			itensMenu.map((itens, index) => {
					<p>{itens}</p>
			})
 		}
		</div>
    </div>
  )
}

export default Saloon;

	

 /* <img className="img-product" src={cardapio.image} /> */


 /*function handleClick(item) {
    console.log(item.id);
    const obj = {
      id: item.id,
      qtd:0,
    }
    setMenu([...menu, item]);
   
  }
  order = [ {id:31, qtd: 1}, {id:33, qtd: 2},  {id:35, qtd: 4},  ]
  
  obj = {id: 1, qtd: 5}

  obj.qtd = qtd + 1

  setItems(
	items.map((item, index) => {
	  item.id === id ? newItem : item
	})
  )*/

  