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
  const routerAllDay=()=>{
    sessionStorage.setItem("nameClient", nameClient)
    sessionStorage.setItem("table", table)
    
    history.push('/hall/allday')
  }
  
  const [nameClient, setNameClient] = useState([]);
  const [table, setTable] = useState('');
  const [nome, setNome] = useState('');
  const [role, setRole] = useState('');
  const [menu, setMenu] = useState([]);
  const [pedidos, setPedidos] = useState ([]);
  const [menuAllDay, setMenuAllDay] = useState ([]);
  const [cafe, setCafe] = useState ([]);
  
  
  useEffect(() => { let myHeaders = new Headers();
    myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhcm9sQGFqdWRhLmNvbSIsImlkIjo4NTEsImlhdCI6MTYxNDExOTg1MiwiZXhwIjoxNjQ1Njc3NDUyfQ.yO3dmWDkQKzVgh4AqqsraSB0QfSCLTah2XO9oGA-JGQ");
    
    let raw = "";
    
    let requestOptions = {
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
        setCafe(cafeDaManha)
        setMenuAllDay(allDay)
      })
      .catch(error => console.log('error', error));},[])

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    history.push('/');
  }
function add (produto) {
    produto.qtd = 1
    console.log(produto)
    setPedidos(prevPedidos => {
     return [... prevPedidos, produto]
})
  }
  function addQtd (index) {
    const copyPedidos = [...pedidos]
    copyPedidos[index].qtd++
    setPedidos(copyPedidos)
    console.log(pedidos)
  }
  function removeQtd (index) {
    const copyPedidos = [...pedidos]
    copyPedidos[index].qtd--
    setPedidos(copyPedidos)
  }
  function sendOrder (){
    // console.log(nameClient)
    // console.log(table)
    // console.log(pedidos)

    fetch('https://lab-api-bq.herokuapp.com/orders', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhcm9sQGFqdWRhLmNvbSIsImlkIjo4NTEsImlhdCI6MTYxNDExOTg1MiwiZXhwIjoxNjQ1Njc3NDUyfQ.yO3dmWDkQKzVgh4AqqsraSB0QfSCLTah2XO9oGA-JGQ"
      },
      body: JSON.stringify({
        "client": nameClient,
        "table": table,
        "products":
          pedidos.map((item) => (
            {
              "id": Number(item.id),
              "qtd": Number(item.qtd)
            }
          ))

      })
    })
.then((response) => response.json())
      .then((json) => {
        console.log(json)
      })
  }
  return (
    <div className="Hall">
      <div className="HallHeader">
      <h1>{nome} - {role}</h1> 
      <div>
          {menu && menu.map(p => (
          <div className = 'menu-cafe'
          name = {p.name} id = {p.id} price = {p.price} key = {p.id}>
            <p>{p.name} {p.flavor} {p.complement}</p>
            <p>R${p.price},00</p>
            <button disabled = {p.qtd && p.qtd != 0} onClick = { () => add (p)}>Adicionar</button>
          </div>
          )) 
          }
          
          <div className = 'pedidos'>
            {pedidos && pedidos.map((p, index) => (
              <div key = {p.id}>
                <p>{p.name}</p>
                <p>{p.price}</p>
                <p>{p.qtd}</p>
                <button onClick = { () => addQtd (index)}> + </button>
                <button onClick = { () => removeQtd (index)}> - </button>
              </div>
            ))}
          </div>
      </div>
      <button onClick={(e) => logout(e)} className="logout">Sair</button>
      </div>
      <div className="btnSalao">        
        <button className="btnSalaoRota" onClick={ ()=> setMenu (cafe) }>Café da manhã</button>
        <button className="btnSalaoRota" onClick={ ()=> setMenu (menuAllDay)}>Resto do dia </button>
        <button className="btnSalaoRota" onClick={sendOrder}>Enviar pedido </button>
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