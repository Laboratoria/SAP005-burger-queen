import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import '../components/Hall.css'


function Hall() {
  const history = useHistory()
  const routerCafe=()=>{
    sessionStorage.setItem("nameCliente", nameClient)
    sessionStorage.setItem("table", table)

    history.push('/hall/cafe')
  }

  const token = localStorage.getItem("token")
  const id = localStorage.getItem("id")

  const [nameClient, setNameClient] = useState([]);
  const [table, setTable] = useState('');
  const [nome, setNome] = useState('');
  const [role, setRole] = useState('');
  const [menu, setMenu] = useState([]);
  const [pedidos, setPedidos] = useState ([]);
  const [menuAllDay, setMenuAllDay] = useState ([]);
  
  useEffect(() => { var myHeaders = new Headers();
    myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhcm9sQGFqdWRhLmNvbSIsImlkIjo4NTEsImlhdCI6MTYxNDExOTg1MiwiZXhwIjoxNjQ1Njc3NDUyfQ.yO3dmWDkQKzVgh4AqqsraSB0QfSCLTah2XO9oGA-JGQ");
    
    var raw = "";
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://lab-api-bq.herokuapp.com/products", requestOptions)
      .then(response => response.json())
      .then(result => {
        const cafeDaManha = result.filter(item => item.type === 'breakfast')
        const allDay = result.filter(item => item.type === 'all-day')
        console.log(cafeDaManha)
        setMenu(cafeDaManha)
        setMenuAllDay(allDay)
      })
      .catch(error => console.log('error', error));},[])

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

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    history.push('/');
  }
function add (e) {
  const parent = e.target.parentNode
  console.log(parent)
  const name = parent.getAttribute('name')
  const id = parent.getAttribute('id')
  const price = parent.getAttribute('price')
  const pedido = {
    name: name, 
    id: id,
    price: price,
  } 
  adicionarItem (pedido)
  }

  function adicionarItem (item){
    const newArray = pedidos 
    newArray.push(item)
    setPedidos(newArray)
console.log(pedidos)
  }
  return (
    <div className="Hall">
      <div className="HallHeader">
      <h1>{nome} - {role}</h1> 
      <div>
          {menu && menu.map(p => (
          <div className = 'menu-cafe'
          name = {p.name} id = {p.id} price = {p.price}>
            <p>{p.name}</p>
            <p>{p.price}</p>
            <button onClick = {add}>Adicionar</button>
          </div>
          )) 
          } 
          {/* {console.log(menu)} */}
          
          <div className = 'menu-cafe'>
            {pedidos && pedidos.map(p => (
              <div>
                <p>{p.name}</p>
                <p>{p.price}</p>
              </div>
            ))}
          </div>
      </div>
      <button onClick={(e) => logout(e)} className="logout">Sair</button>
      </div>
      <div className="btnSalao">        
        <button className="btnSalaoRota" onClick={routerCafe}>Café da manhã</button>
        {/* <button className="btnSalaoRota" onClick={routerAllDay}>Resto do dia </button> */}
      </div>
      <div className="inputSalao">
        <div className="inputLabel">
        <label className="cadLabel" htmlFor="cadInputEmail">Cliente:</label>
        <input type="text" placeholder="Cliente" className="cadInput" value={nameClient} onChange={(event) => setNameClient(event.target.value)} />
        </div>

        <div className="inputLabel">
        <label className="cadLabel" htmlFor="cadInputEmail">Mesa:</label>
        <input type="number" placeholder="Mesa" className="cadInput" value={table} onChange={(event) => setTable(event.target.value)} />
        </div>
      </div>
      </div>
    )
}

  export default Hall;