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
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const token = localStorage.getItem("token");

  console.log(allDay)

  const history = useHistory()
  const rLogin=()=> {
    history.push('/')
  }

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
              console.log(menu)
            })}><img src= {xicara} alt="" className='imgMenu' /></button>

            <button className="btnMenu"   onClick={((e)=>{
              e.preventDefault();
              console.log(menu)
            })}><img src= {prato} alt="" className='imgMenu' /></button>

        
              <div className='menuItens'> {
                menu.map((menuItems) => {

                  return (
                    <div key={menuItems.id}>
                      <p>{menuItems.name}</p>
                      <p>{menuItems.flavor}</p>
                      <p>R$:{menuItems.price},00</p>
                    </div>
                  )
                })
              } </div>

            <button className='allDay'onClick={( (e) => { 
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
          )}>Refeição</button>
        </section>

        <form className='order'>
          <h1>Pedido</h1>
            <input type="text" id="client" placeholder="Digite o nome do cliente" value={name} onChange={(event) =>
              setName(event.target.value)} />
            <input type="number" id="number" min='0' max='20' value={number} onChange={(event) =>
              setNumber(event.target.value)} />
          </form>

       </ol>
       <button className='send'>ENVIAR</button>
      </header>
    </div>
  )
}



export default Waiter;