import '../style/Waiter.css';
import { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom'
import logo from '../images/logo.png';
import exit from '../images/exit.jpeg';

const Waiter = () => {

  const [menu, setMenu] = useState([]);
  const [allDay, setDay] = useState([]);
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
      <header className="App-header">
        <img src={logo} alt="" className="logo" />
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
        <button></button>
        
          <div className='menuItens'> {
          allDay.map((menuItems) => {

            return (
              <div key={menuItems.id}>
                <p>{menuItems.name}</p>
                <p>{menuItems.flavor}</p>
                <p>R$:{menuItems.price},00</p>
              </div>
            )
          })
        } </div>



      </header>
    </div>
  )
}

export default Waiter;