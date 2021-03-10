import React, {useState, useEffect} from 'react';
//import '../App.css';

function KitchenContent() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://lab-api-bq.herokuapp.com/orders', {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "accept": "application/json",
              "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhcm9sQGFqdWRhLmNvbSIsImlkIjo4NTEsImlhdCI6MTYxNDExOTg1MiwiZXhwIjoxNjQ1Njc3NDUyfQ.yO3dmWDkQKzVgh4AqqsraSB0QfSCLTah2XO9oGA-JGQ"
            } 
          })
      .then((response) => response.json())
            .then((json) => {
                const pending = json.filter(item => item.status === "pending")
                setOrders (pending)
              console.log(pending)
            })
    }, [])
    
    return (
        <>
        {orders && orders.map(p => (
          <div className = 'menu-cafe'
          name = {p.client_name} id = {p.id}  key = {p.id}>
            <p>{p.client_name}</p>
            <p>{p.createdAt}</p>
            <button disabled = {p.qtd && p.qtd != 0} onClick = { () => (p)}>Preparar pedido</button>
          </div>
          )) 
          }
        </>
    );
}

export default KitchenContent;