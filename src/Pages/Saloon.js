import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


function Saloon() {

  const [menu, setMenu] = useState([]);
  const [clientBox, setClient] = useState("");
  const [table, setTable] = useState("");
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");
  const history = useHistory();
  const [itensMenu, setItens] = useState([]);
  let contador = 0;
  let idProducts = 0;

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

  function clientOrder(clientBox, table, contador, id) {
        const myHeaders = new Headers();
		myHeaders.append("Authorization", `${token}`);
		myHeaders.append("Content-Type", "application/json");

		const raw = JSON.stringify({ "client":{clientBox}, "table":{table}, "products":[{ "id": id,"qtd": contador }]});

		const requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow"
		};

		fetch("https://lab-api-bq.herokuapp.com/orders", requestOptions)
		.then(response => response.json())
		.then(result => setMenu(result))
		.catch(error => console.log("error", error));
	}
	
	function handleClick (itens){
		setItens([...itensMenu, itens]);
		console.log("cliquei");
		/*contador +=1;
		const obj = {
			id: itens.id,
			qtd: contador,
		};
		
		setProducts((prevState) => [...prevState, obj]);
		console.log(products);
		console.log(itensMenu);*/

	}

	function handleOrder (event){
		event.preventDefault();
		clientOrder (clientBox, table, products, contador, idProducts)
	}
    
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
   						<button className="add-item-btn" onClick={() => handleClick(cardapio)}>Adicionar</button>
						</div>
	 				 </ul>
					
                  <li>{cardapio.name}</li>
                  <li>{cardapio.flavor}</li>
                  <li>{cardapio.complement}</li>
                  <li>R$ {cardapio.price}</li>
                  <li>{cardapio.type}</li>
                  <li>{cardapio.sub_type}</li>

              </div>
            )
          })
        }
			</div>
			<div>{
			itensMenu.length !== 0 &&
			itensMenu.map((itens, index) => {
					idProducts= itens.id;
					return(
					<div key= {index}>
						<p>{itens.name}</p>
						<p>{itens.price}</p>
						<button className="add-item-btn" onClick={() => (console.log(contador += 1))}>+</button>
						<button className="add-item-btn" onClick={() => (console.log(contador -= 1))}>-</button>
						
					</div>)
			})
 		}
		 <div>
		 <button className="enviar-pedido" onClick={(event) => handleOrder(event)}>Enviar Pedido</button> 
		 </div>
		</div>
    </div>
  )
}

export default Saloon;

  