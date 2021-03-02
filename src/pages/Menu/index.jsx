import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input'; 
import {Copyright, useStyles, NavBar, NewTaskInput, ListItem} from '../../components.js';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Menu = () => {
  const classes = useStyles();
  const tokenLocal = localStorage.getItem('token');
  console.log(tokenLocal)
  const [list, setList] = useState([]);
  const [listMap, setListMap] = useState([]); 

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
      setList(data) 
    })
  }, [tokenLocal])

  const listBreakFast = () => {
    const productsBreakfast = list.filter(itens => itens.type===('breakfast'));
    setListMap(productsBreakfast); 
  }

  const listHamburguer = () => {
    const productsHamburguers = list.filter(itens => itens.sub_type===('hamburguer'));
    setListMap(productsHamburguers);
  }

  const listDrinks = () => {
    const productsDrinks = list.filter(itens => itens.sub_type===('drinks'));
    setListMap(productsDrinks);
  } 

  const [order, setOrder] = useState({});
  const [productsPrices, setProductsPrices] = useState([]);
  const [totalOrder, setTotalOrder] = useState([]);
  
  const setOrderItem = (product) => {

    const itemId = product.id
    setProductsPrices([...productsPrices, product.price]);
    setTotalOrder([...totalOrder, product]);
    

    const storageOrder = JSON.parse(localStorage.getItem('orderList') || '[]');
    storageOrder.push({
        id: itemId,
        qtd: 1,
    });

    localStorage.setItem("orderList", JSON.stringify(storageOrder));
  }

  const storedArray = localStorage.getItem("orderList");
  const ourArray = JSON.parse(storedArray)

  function sendOrder () {
    fetch('https://lab-api-bq.herokuapp.com/orders', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
        "Authorization": `${tokenLocal}`
      },
      body: JSON.stringify({
        "client": `${order.client}`,
        "table": `${order.table}`,
        "products":
          ourArray.map((product) => (
            {
              "id": Number(product.id),
              "qtd": 1
            }
          ))

      })
    }).then((response) => console.log(response.json()))
    .then(() => setTotalOrder([])
    .then(localStorage.removeItem('orderList'))
    )
  }

  return (
    <>
      <Grid id='menuList'className='container' container direction="row" justify="flex-start" alignItems="flex-start">
        <NavBar/>      
        <Link to="/Hall"><ArrowBackIosIcon color="disabled" fontSize="large"/> </Link>
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
        {totalOrder.map((product, index) => (
            <div key={index}>
              
              <span>{product.name} </span>
              <span>{product.flavor === 'null' ? '' : product.flavor} </span>
              <span>{product.complement === 'null' ? '' : product.complement }</span>
              <span> R$ {product.price},00  </span>
              <span style={{ cursor: 'pointer' }} type='button' >🗑</span>
            </div>
          ))} 
        
        <div>
          <button onClick={() => sendOrder()}>Enviar para cozinha</button>
        </div>
          
        <div>
          <button onClick={listBreakFast} className={classes.submitMenuType}>Café da manhã</button>
          <button onClick={listHamburguer} className={classes.submitMenuType}>Hamburguers</button>
          <button onClick={listDrinks} className={classes.submitMenuType} >Bebidas</button>
          {listMap.map((product) => (
            <div key={product.id}>
              <button className={classes.submitMenuItems}  onClick={()=> setOrderItem(product)}>{product.name} {product.flavor} {product.complement}<br></br>R$ {product.price},00  </button>
            </div>)
          )}
        </div>
      </Grid>
      <Copyright />
    </>
  )
};
export default Menu;



// const [order, setOrder] = useState({});
  // const [totalOrder, setTotalOrder] = useState([]);
  // const [productsPrices, setProductsPrices] = useState([]);

  // const handleProduct = (product) => {

  //   console.log(product)

  //   setTotalOrder([...totalOrder, product]);
  //   setProductsPrices([...productsPrices, product.price]);
  //   const quantityOrder = totalOrder.map((product) => {
  //     return {
  //       id: product.id,
  //       qtd: 1,
  //     };
  //   })

  //   const qtd = quantityOrder.reduce(function (array, productItem) {
  //     array[productItem.id] = array[productItem.id] || [];
  //     array[productItem.id].push(productItem);
  //     return array;
  //   }, Object.create(null));//criar um novo objeto

  //   console.log(qtd)

  //   const arrayProducts = [];
  //   for (const [key, value] of Object.entries(qtd)) {
  //     arrayProducts.push({
  //       id: key,
  //       qtd: value.length,
  //     });
  //   }
  //   setOrder({ ...order, products: arrayProducts });

   

  //   console.log(arrayProducts)
  //   console.log(quantityOrder)

  // }