import React, {useEffect, useState} from 'react';


function Saloon() {
	const [menu, setmenu] = useState([]);


	const myHeaders = new Headers();
	myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RhbmRvQGhvdG1haWwuY29tIiwiaWQiOjExLCJpYXQiOjE2MTI5OTA3NzEsImV4cCI6MTY0NDU0ODM3MX0.UgB1aY5mqNLK0MY-VhTv3fepMC-tVIOfQGDqXND44FY");

	const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
	};
	useEffect(() => { fetch("https://lab-api-bq.herokuapp.com/products", requestOptions) 
	.then(response => response.json())
	.then(result => {setmenu(result)
	console.log(result);
	})
	.catch(error => console.log('error', error));
	}, [])
	
	const card = [];
	for (let cardapio of menu){
		card.push(<div key={cardapio.id}>{cardapio.name}<p>{cardapio.flavor}</p><p>{cardapio.complement}</p><p>{cardapio.price}</p><img src={cardapio.image}/><p>{cardapio.type}</p><p>{cardapio.subtype}</p></div>)
	}

	return (
		<div>
			<h1>Salão</h1>
			<div>{card}</div>
		</div>
	)
}

export default Saloon;