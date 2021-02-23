import '../style/Waiter.css';
import { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom'
import logo from '../images/logo.png';
import prato from '../images/prato.png';
import xicara from '../images/xicara.png';
import exit from '../images/exit.jpeg';

const Waiter = () => {

  const [menu, setMenu] = useState([]);
  const [allDay, setDay] = useState([]);
  const [products, setProducts] = useState([]);
  const [client, setClient] = useState('');
  const [table, setTable] = useState('');
  const [breakfast, setBreakfast] = useState([]);
  const token = localStorage.getItem("token");

  console.log(allDay)

  const history = useHistory()
  const rLogin=()=> {
    history.push('/')
  }

  const order = () =>{
    if(client !== '' && table !== ''){
            Promise.add({
                client: client,
                mesa: table,
                pedido:products,
            });
            alert(`Olá, o pedido do cliente ${client} da mesa ${table} foi finalizado com sucesso.`)
            setProducts([]);
            setTable('');
            setClient('');
    }
};


  useEffect(() => {
    fetch('https://lab-api-bq.herokuapp.com/products', {
      method: 'GET',
      headers: {
        "accept": "application/json",
        'Authorization': `${token}`
      },

    })

      .then((response) => response.json())
      .then((json) => {
        const breakfast = json.filter(item => item.type === 'breakfast')
        const allday = json.filter(item => item.type === 'all-day')
        setMenu(breakfast)
        setDay(allday)

        console.log(json)
      })

  }, [token])

  return (

    <div className="App">
      <nav className="nav">
        <button className="exit"   onClick={rLogin}>
      <img src= {exit} alt="" className="exit"/></button>
      </nav>

      <header className="App-waiter">
       <div id="logoWaiter"> 
        <img src={logo} alt="" className="logoWaiter" /> 
        </div>
      <ol>
        <section className='Menu'>
            <button className="btnMenu"   onClick={((e)=>{
              e.preventDefault();
              setBreakfast(menu)
            })}><img src= {xicara} alt="" className='imgMenu' /></button>

            <button className="btnMenu"   onClick={((e)=>{
              e.preventDefault();
              setBreakfast(allDay)
            })}><img src= {prato} alt="" className='imgMenu' /></button>

        
              <div className='menuItens'> {
                breakfast.map((menuItems) => {

                  return (
                    <div key={menuItems.id}>
                      <p>{menuItems.name}</p>
                      <p>{menuItems.flavor}</p>
                      <p>R$:{menuItems.price},00</p>
                    </div>
                  )
                })
              } </div>

           

            {/* <button className='allDay'onClick={( (e) => { 
              e.preventDefault();
              console.log('clicou');
              <div className='menuItens'> {
                allDay.map ((menuItems)=>{
                  return (
                    <div key={menuItems.id}>
                      <p>{menuItems.name}</p>
                      <p>{menuItems.flavor}</p>
                      <p>R$:{menuItems.price},00</p>
                    </div>
                  )
                })
              }</div>
            }
          )}>Refeição</button> */}
        </section>

        <form className='order'>
          <h1>Pedido</h1>
            <input type="text" id="client" placeholder="Digite o nome do cliente" value={client} onChange={(event) =>
              setClient(event.target.value)} />
            <input type="number" id="number" min='0' max='20' value={table} onChange={(event) =>
              setTable(event.target.value)} />
              <input type="text" id="products" value={products} onClick={order} />
          </form>

       </ol>
       <button className='send' onClick={( (e) => {

              e.preventDefault();
        fetch('https://lab-api-bq.herokuapp.com/orders', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
            'Authorization': `${token}`
          },
                body:`client=${client}&table=${table}&products=${menu}`
              })
                .then((response) => response.json())
                .then((json) => {
                  console.log(json);
                  setClient('');
                  setTable('');
                  setProducts('');
                })
                console.log('foi')
            })} >ENVIAR</button>
      </header>
    </div>
  )
}



export default Waiter;