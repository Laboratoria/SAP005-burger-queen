import React, { useState } from 'react';
import './Salao.css';

function Salao() {
  const token = localStorage.getItem("token")
  const id = localStorage.getItem("id")
  const [nome, setNome] = useState('');
  const [role, setRole] = useState('');

  fetch(`https://lab-api-bq.herokuapp.com/users/${id}`,{
    headers:{ 
      "accept": "application/json",
    "Authorization":`${token}`},    

  })
  .then((response) => response.json())
  .then((json) => {  
    setNome(json.name)
    setRole(json.role)
  }) 

  return (
    <div className="Salao">
      <div>
      <h1>{nome} - {role}</h1>
      </div>      
      <h1 className="messageSelect">Selecione o Período:</h1>
      <div className="btnSalao">        
        <button>Café da manhã</button>
        <button>Resto do dia </button>
      </div>      
    </div>
    )
}
     
 
export default Salao;
