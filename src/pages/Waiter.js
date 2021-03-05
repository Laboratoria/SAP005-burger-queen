import '../style/Waiter.css';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import logo from '../images/logo.png';
import prato from '../images/prato.png';
import xicara from '../images/xicara.png';
import copo from '../images/copo.png';
import b from '../images/b.png';
import menuburguer from '../images/menuburguer.png';

const Waiter = () => {

  const [menu, setMenu] = useState([]);
  const [hamburguer, setHamburguer] = useState([]);
  const [side, setSide] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [client, setClient] = useState('');
  const [table, setTable] = useState('');
  const [breakfast, setBreakfast] = useState([]);
  const token = localStorage.getItem("token");
  const [quantidade, setQuantidade] = useState([]);
  const [total, setTotal] = useState(0);


  const history = useHistory()
  const rLogin = () => {
    history.push('/')
  }

  const Historic = () => {
    history.push('/Historic')
  }


  useEffect(() => {
    fetch(`https://lab-api-bq.herokuapp.com/products`, {
      method: 'GET',
      headers: {
        "accept": "application/json",
        'Authorization': `${token}`
      },

    })

      .then((response) => response.json())
      .then((json) => {
        const breakfast = json.filter(item => item.type === 'breakfast')
        const hamburguer = json.filter(item => item.sub_type === 'hamburguer')
        const drinks = json.filter(item => item.sub_type === 'drinks')
        const side = json.filter(item => item.sub_type === 'side')
        setMenu(breakfast)
        setBreakfast(breakfast)
        setHamburguer(hamburguer)
        setDrinks(drinks)
        setSide(side)
        console.log(json)
      })

  }, [token])

  function clickQuantidade(item) {
    const elementoExiste = quantidade.find(elemento => elemento === item)
    if (elementoExiste) {
      elementoExiste.qtd += 1
      setQuantidade(prevQuantidade => prevQuantidade.map(prevElem => prevElem.id === elementoExiste.id ? elementoExiste : prevElem))
    } else {
      item.qtd = 1;
      item.subtotal = item.price;
      setQuantidade([...quantidade, item]);
    }
  }
  function clickLess(e, item) {
    e.preventDefault();
    const elementoLess = quantidade.find(elemento => elemento === item)
    if (elementoLess) {
      elementoLess.qtd -= 1
      setQuantidade(prevLess => prevLess.map(lessPrev => lessPrev.id === elementoLess.id ? elementoLess : lessPrev))
    } else {

    }
  }

  useEffect(() => {
    console.log(quantidade)
    setTotal(() => {
      const totalPrice = quantidade.reduce((accumulator, array) => {
        const { qtd, price } = array;
        accumulator = Number(qtd * price + accumulator)
        return accumulator
      }, 0)
      return totalPrice;
    })
  }, [quantidade]
  )


  return (

    <div className="App">

      <input type="checkbox" id="check"></input>
      <label id="icone" for="check"><img className="btn-burguer" src={menuburguer} alt="" /></label>

      <div class="menuLateral">
        <nav>
          <a href={Historic}><div onClick={Historic} className="link">Historico</div></a>
          <a href={rLogin}><div onClick={rLogin} className="link">Sair</div></a>
        </nav>
      </div>
      <header className="header">
        <div id="logoWaiter">
          <img src={logo} alt="" className="logoWaiter" />
        </div>
      </header>
      <ol className="App-waiter">
        <section className='Menu'>
          <button className="btnMenu" onClick={((e) => {
            e.preventDefault();
            setBreakfast(menu)
          })}><img src={xicara} alt="" className='imgMenu' /></button>

          <button className="btnMenu" onClick={((e) => {
            e.preventDefault();
            setBreakfast(hamburguer)
          })}><img src={prato} alt="" className='imgMenu' /></button>

          <button className="btnMenu" onClick={((e) => {
            e.preventDefault();
            setBreakfast(side);
          })}><img src={b} alt="" className='imgMenu' /></button>

          <button className="btnMenu" onClick={((e) => {
            e.preventDefault();
            setBreakfast(drinks)
          })}><img src={copo} alt="" className='imgMenu' /></button>

          <div className='menuItens'> {
            breakfast.map((menuItems) => {

              return (

                <div className="Produtos">
                  <div key={menuItems.id}>
                    <div className="teste">
                      <div className='nameProducts'>
                        <ul>{menuItems.name}</ul>
                      </div>
                      <div className='sabor'>
                        <ul>{menuItems.flavor}</ul>
                        <div className='complement'>
                          <ul>{menuItems.complement}</ul>
                        </div>
                      </div>
                      <ul >R$:{menuItems.price},00</ul>
                      <button className="btnQuantidade" onClick={() => clickQuantidade(menuItems)}>+</button>

                    </div>
                  </div>
                </div>
              )

            })
          } </div>

        </section>
        <form className='order'>
          <h1>Pedido</h1>
          <input type="text" id="client" placeholder="Digite o nome do cliente" value={client} onChange={(event) =>
            setClient(event.target.value)} />
          <input type="number" id="number" min='0' max='20' placeholder="Mesa" value={table} onChange={(event) =>
            setTable(event.target.value)} />
          <div className="pedidos">
            <div className='divOrder'>
              <p>Item</p>
              <p className="p">Preço</p>
              <p>Quantidade</p>
             
            </div>
            {quantidade.map(item =>
              <div>
                <span className="Map">
                  <ol className="ComplementItem">
                  <p className='orderProducts'>{item.name}</p>
                  <p className='complement'>{item.flavor}</p>
                  <p className='complement'>{item.complement}</p>
                  </ol>
                  <p className='orderProducts'>R$:{item.price},00</p>
                  <p className='complement'> {item.qtd}</p>
                  <button className="btnQuantidade" onClick={(e) => clickLess(e, item)}>-</button>                
                </span>
              </div>

            )}
            <p className="total">Total: R$:{total},00</p>
          </div>

          <button className='send' onClick={((e) => {
            e.preventDefault();
            fetch(`https://lab-api-bq.herokuapp.com/orders`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
                'Authorization': `${token}`
              },
              body: JSON.stringify({
                "client": `${client}`,
                "table": `${table}`,
                "products": quantidade.map((item) => (
                  {
                    "id": Number(item.id),
                    "qtd": `${quantidade}`
                  }
                ))


              })
            })
              .then((response) => response.json())
              .then((json) => {
                console.log(json);
                setClient('');
                setTable('');
                setQuantidade([]);
              })
            console.log('foi')
          })} >ENVIAR</button>

        </form>
      </ol>
    </div >
  )
}



export default Waiter;