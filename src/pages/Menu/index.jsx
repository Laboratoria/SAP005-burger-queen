import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input'; 
import {Copyright, useStyles, NavBar} from '../../components.js';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';



const Menu = () => {
const classes = useStyles();
const tokenLocal = localStorage.getItem('token');
console.log(tokenLocal)
const [list, setList] = useState([]);
const [listMap, setListMap] = useState([]); 
const [totalOrder, setTotalOrder] = useState([]);
const [order, setOrder] = useState({});
const [deletedProduct, setDeletedProduct] = useState([]);
const [totalPrice, setTotalPrices] = useState([]);
const [productsPrices, setProductsPrices] = useState([]);

useEffect(() => {
  fetch('https://lab-api-bq.herokuapp.com/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${tokenLocal}`
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setList(data) 
    })
}, [tokenLocal])

//inserir order
const postOrder = () => {
  fetch('https://lab-api-bq.herokuapp.com/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${tokenLocal}`,
    },
    body: JSON.stringify(order),
  })
    .then((response) => {
      response.json()
        .then(() => {
          //console.log(data);
          setOrder({});
          setTotalOrder([]);
          setTotalPrices([]);
          setProductsPrices([]);
          setDeletedProduct([]);
          alert('deu certo');
        });
    })
    .catch(() => {
      alert("deu ruim");
    });
};

const listBreakFast = () => {
  console.log(list)

  const productsBreakfast = list.filter(itens => itens.type===('breakfast'));
    setListMap(productsBreakfast); 
}

const listHamburguer = () => {
  console.log(list)
  const productsHamburguers = list.filter(itens => itens.sub_type===('hamburguer'));
    setListMap(productsHamburguers);
    console.log(productsHamburguers)
}

const listDrinks = () => {
  console.log(list)
  const productsDrinks = list.filter(itens => itens.sub_type===('drinks'));
    setListMap(productsDrinks);
}
const addItems = (product) => {
  setTotalOrder([...totalOrder, product]);
  setProductsPrices([...productsPrices, product.price]);
  const quantityOrder = totalOrder.map((product) => {
    return {
      id: product.id,
      qtd: 1,
    };
  });
  // {
  //   "client": "string",
  //   "table": "string",
  //   "products": [
  //     {
  //       "id": 0, id do produto
  //       "qtd": 0 quantidade para add
  //     }
  //   ]
  // }

  const qtd = quantityOrder.reduce(function (array, productItem) {
    array[productItem.id] = array[productItem.id] || [];
    array[productItem.id].push(productItem);
    return array;
  }, Object.create(null));//criar um novo objeto

  /*Uso de reduce
  ex:
  cont rockets = [
  {country: "Russia", Lauches: 32"},
  {country: "US", Lauches: 23"},
  {country: "Chiva!, Lauches: 16"},
  {country: "Europe", Lauches: 7"},
  {country: "india!, Lauches: 4"},
  {country: "Japan", Lauches: 3"}
  ]
  const totalLauches = rockets.reduce((valoranterior, numerolanatual) => valoranterior + numeroatual.lauches, 0(numero inicial para contagem))
  vai dar a soma dos lauches
  */
  const arrayProducts = [];
  for (const [key, value] of Object.entries(qtd)) {
    arrayProducts.push({
      id: key,
      qtd: value.length,
    });
  }

  setOrder({ ...order, products: arrayProducts });
};
//splice insere ao array
const deletingProducts = (product) => {
  setTotalPrices(productsPrices.splice(totalOrder.indexOf(product), 1));
  setDeletedProduct(totalOrder.splice(totalOrder.indexOf(product), 1));
  sumFunction();
};

const sumFunction = () => {
  setTotalPrices(productsPrices.reduce((resume, num) => resume + num));
};

return (
  <div>
    <Grid id='menuList'className='container'   
    container
    direction="row"
    justify="flex-start"
    alignItems="flex-start">
      <Grid>
        <NavBar />
        <div>
          <div>
            <button onClick={listBreakFast} className={classes.submitMenuType}>Café da manhã</button>
            <button 
            onClick={listHamburguer} 
            className={classes.submitMenuType}>Hamburguers</button>
            <button 
            onClick={listDrinks} 
            className={classes.submitMenuType} >Bebidas</button>
            {listMap.map((product) => (
              <div key={product.id}>
                <button className={classes.submitMenuItems}  
                onClick={() => addItems(product)} >{product.name} {product.flavor} {product.complement}<br></br>R$ {product.price},00  </button>
              </div>
            ))}
          </div>
        </div>
      </Grid >  
      <Grid id='orderResume'className='container'name={tokenLocal.name}>
        Pedido
        <section className={classes.paper} >
          <form className={classes.paperTable}  noValidate autoComplete="off" >
            <Input placeholder="Nome"fullWidth inputProps={{ 'aria-label': 'description' }} type='text'
            name='nome'
            className='input'
            required
            onChange={(event) =>
              setOrder({ ...order, client: event.target.value })
            }/>
            <Input placeholder="Mesa" inputProps={{ 'aria-label': 'description' }} type='text'
            name='mesa'
            className='input'
            required
            onChange={(event) =>
              setOrder({ ...order, table: event.target.value })
            } />
          </form>
        </section>
            {totalOrder.map((product, index) => (
            <div key={index}>
              
              <span>1 {product.name} </span>
              <span>{product.flavor === 'null' ? '' : product.flavor} </span>
              <span>{product.complement === 'null' ? '' : product.complement }</span>
              <span> R$ {product.price},00  </span>
              <span>
                <span style={{ cursor: 'pointer' }} type='button'  onClick={() => deletingProducts(product)}>🗑️</span>
              </span>
            </div>
          ))} 
        <div >
          <span >
            <span>Total:</span>
          </span>
          <span>
            <span>R$ {totalPrice},00</span>
          </span>
          <span>
            <br></br><button onClick={() => sumFunction()}>Atualizar Total</button>
          <br></br></span>
          <span>
            <button onClick={() => postOrder()}>Enviar para cozinha</button>
          </span>
        </div><br></br>
      </Grid>
    </Grid>
    <Link to="/Hall"><ArrowBackIosIcon color="disabled" fontSize="large"/> </Link>
    <Copyright />
  </div>
)
};

export default Menu;