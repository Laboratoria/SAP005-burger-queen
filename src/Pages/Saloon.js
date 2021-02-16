import React, {useEffect, useState} from 'react';


function Saloon() {
  const [menu, setMenu] = useState([]);


  var myHeaders = new Headers();
  myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RhbmRvQGhvdG1haWwuY29tIiwiaWQiOjExLCJpYXQiOjE2MTI5OTA3NzEsImV4cCI6MTY0NDU0ODM3MX0.UgB1aY5mqNLK0MY-VhTv3fepMC-tVIOfQGDqXND44FY");

  var requestOptions = {
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
  
  const card = [];
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
  }

  return (
    <div>
      <h1>Salão</h1>
      <div className='cardapio'>{card}</div>
    </div>
  )
}

export default Saloon;
