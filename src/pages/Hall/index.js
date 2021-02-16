import React,{useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'

function Hall(){

    const history = useHistory()

    const routerBack = () => {
        history.push('/hall')
    }

    const token  = localStorage.getItem("token");
    
    function cardapio (event) {
        event.preventDefault();
        event.preventDefault();

                    fetch('https://lab-api-bq.herokuapp.com/products/', {
                        method: 'GET',
                        headers: {
                            'accept': 'application/json',
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Authorization':`${token}`
                        },

                    })
                        .then((response) => response.json()).then((json) => {
                             console.log(json);
                            if (json.id !== null) {
                                routerBack();
                            }
                            
                            
                        })

    }
    
    return(
        <div className="App">
           <h1>Cardápios</h1> 
        
        <button className="cardapioManha" onClick={cardapio}>Café da manhã</button>
        <button className="cardapioTarde" onClick={cardapio}>Almoço / Jantar</button>
        
        
        </div>    
    );
};
 export default Hall;