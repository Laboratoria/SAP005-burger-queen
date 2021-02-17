import React, {useEffect, useState} from 'react';


function Saloon() {
  const [menu, setMenu] = useState([]);
  let token = localStorage.getItem('token');

  const myHeaders = new Headers();
  myHeaders.append('Authorization', `${token}`);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  useEffect(() => { fetch("https://lab-api-bq.herokuapp.com/products", requestOptions) 
    .then(response => response.json())
    .then(result => {setMenu(result)
    console.log(result);
  })
    .catch(error => console.log('error', error));
  }, [])
  
 /* const card = [];
  for (let cardapio of menu) {
    card.push(
      <div className='products' key={cardapio.id}>
        <img className='img-product' src={cardapio.image} />
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
  }*/

	function clientUser(clientBox, table, products){
		const myHeaders = new Headers();
		myHeaders.append("Authorization", `${token}`);
		myHeaders.append("Content-Type", "application/json");

		const raw = JSON.stringify({"client":{clientBox},"table":{table},"products":[{"id":29,"qtd":1}]});

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

		const [clientBox, setClient] = useState('');
		const [table, setTable] = useState('');
		const [products, setProducts] = useState('');
		

		const handleSubmit = (event) => {
		event.preventDefault();
		clientUser (clientBox, table, products)
		}
		
		return (
			<div>
				<h1>Salão</h1>
					<div className = "anote-pedido">
						<label>
							Cliente:
							<input type= "text" value={clientBox} onChange={(event) => setClient(event.target.value)}/>
						</label>
						<label>
							Mesa:
							<input type= "text" value={table} onChange={(event) => setTable(event.target.value)}/>
						</label>
						<label>
							Pedido:
							<input type= "text" value={products} onChange={(event) => setProducts(event.target.value)}/>
						</label>

					</div>
					<div className='cardapio'>{
						menu.map((cardapio) => {
							return (
						<div className='products' key={cardapio.id}>
							<img className='img-product' src={cardapio.image} />
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
	//}

}

export default Saloon;
