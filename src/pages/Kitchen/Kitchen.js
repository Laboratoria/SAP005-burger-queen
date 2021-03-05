import React, { useState, useEffect } from 'react';

  function Kitchen() {
      const [pending, setPending] = useState([]);
      const [progress, setProgress] = useState([]);
      const [ready, setReady] = useState([]);
    
      useEffect(() => {
        const userToken = localStorage.getItem("token")
    
        fetch('https://lab-api-bq.herokuapp.com/orders', {
          headers: {
            'Authorization': userToken,
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then(data => {
            console.log(data)
            const orders = data
            const filterPending = orders.filter(order => order.status === "pending")
            const filterinProgress = orders.filter(inProgre => inProgre.status === "em preparo")
            const filterReady = orders.filter(readyGo => readyGo.status === "pronto")
            setPending(filterPending)  
            setProgress(filterinProgress)  
            setReady(filterReady)  
          })
          .catch(erro => console.log(erro))
      },
      []
      );

    return (
      <div className="Cozinha">
        <h1 className="CozinhaTitle">Histórico de Pedidos</h1>
          <div className="orders-received">
            <h4>Pedidos Recebidos</h4>
            <div>
              {
                pending.length > 0 && 
                pending.map(pendency => {
                  return (
                    <div key={pendency.id}>
                    <p>{pendency.client_name}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="orders-preparing">
            <h4>Preparando</h4>
              <div>
              {
                progress.length > 0 && 
                progress.map(progressing => {
                  return (
                    <div key={progressing.id}>
                    <p>{progressing.client_name}</p>
                    </div>
                  )
                })
              }
              </div>
          </div>
          <div className="orders-ready">
            <h4>Pronto</h4>
              <div>
              {
                ready.length > 0 && 
                ready.map(readytoGo => {
                  return (
                    <div key={readytoGo.id}>
                    <p>{readytoGo.client_name}</p>
                    </div>
                  )
                })
              }
              </div>
          </div>
      </div>
    );
  }

export default Kitchen;