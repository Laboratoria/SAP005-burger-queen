import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from   '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles'
//import '../components/Hall.css'

const useStyles = makeStyles((theme)=>({
  root:{
      background: 'linear-gradient(45deg,#333, #999)',
      border: 0,
      borderRadius: 5,
  },
  card:{
    width: 140,
    textAlign: 'center',
    margin: 10,
  }
}));

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
  const styles = useStyles();
  
  
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
      <div>
      <div className="HallHeader">
        <Button variant="contained" color="secondary" className="btnSalaoRota" onClick={ ()=> setMenu (cafe) }>Café da manhã</Button>
        <Button variant="contained" color="secondary" className="btnSalaoRota" onClick={ ()=> setMenu (menuAllDay)}>Resto do dia </Button>
      <h1>{nome} - {role}</h1> 
      <div>
          {menu && menu.map(p => (
          <Card className={styles.card}>
          <div className = 'menu-cafe'
          name = {p.name} id = {p.id} price = {p.price} key = {p.id}>
            <Typography variant="body2" color="textPrimary" component="p">{p.name} {p.flavor} {p.complement}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">R${p.price},00</Typography>
            <Button disabled = {p.qtd && p.qtd != 0} onClick = { () => add (p)}>Adicionar</Button>
          </div>
          </Card>
          )) 
          }
          </div>
          <div>

          
          <div className = 'pedidos'>
            {pedidos && pedidos.map((p, index) => (
              <Card className={styles.card}>
              <div key = {p.id}>
                <Typography variant="body2" color="textPrimary">{p.name}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">{p.price}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">{p.qtd}</Typography>
                <Button onClick = { () => addQtd (index)}> + </Button>
                <Button onClick = { () => removeQtd (index)}> - </Button>
              </div>
              </Card>
            ))}
          </div>
      </div>
      <Button variant="contained" color="secondary" onClick={(e) => logout(e)} className="logout">Sair</Button>
      </div>
      <div className="btnSalao">        
        <Button variant="contained" color="secondary" className="btnSalaoRota" onClick={sendOrder}>Enviar pedido </Button>
      </div>
      <div className="inputSalao">
        <div className="inputLabel">
        <Typography variant="body2" color="secondary" className="cadLabel">Cliente:</Typography>
        <TextField className={styles.root} type="text"  placeholder="Cliente"  value={nameClient} onChange={(event) => setNameClient(event.target.value)} />
        </div>

        <div className="inputLabel">
        <Typography variant="body2" color="secondary" className="cadLabel" htmlFor="cadInputEmail">Mesa:</Typography>
        <TextField className={styles.root} type="number" placeholder="Mesa" value={table} onChange={(event) => setTable(event.target.value)} />
        </div>
      </div>
      </div>
      </div>
    )
}

  export default Hall;