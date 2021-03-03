import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input'; 
import {Copyright, useStyles, NavBar, NewTaskInput, ListItem} from '../../components.js';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Menu = () => {
  const classes = useStyles();
  const history = useHistory();

  const tokenLocal = localStorage.getItem('token');
  
  const [list, setList] = useState([]);
  const [listMap, setListMap] = useState([]); 

  const clearHall = () => {
    history.push('/Hall')
  }


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

  function validadeInputs(){
    const table = (order.table);
    const client = (order.client);
    console.log(table)
    console.log(client)
    if ( client === undefined || table === undefined )
     alert('Preencha os campos corretamente')
    else {
      sendOrder()   
    }   
  }

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
        totalOrder.map((product) => (
            {
              "id": Number(product.id),
              "qtd": Number(product.qtd)
            }
          ))
      })
    })
    .then(() => {
      clearHall() 
    })
  }

  useEffect(()=>{
    console.log(totalOrder)
  },[totalOrder])

  return (
    <>
      <Grid id='menuList'className='container' container direction="row" justify="flex-start" alignItems="flex-start">
        <NavBar/>      
        <form className={classes.paperTable}  noValidate autoComplete="off" >
            <Input placeholder="Nome" fullWidth inputProps={{ 'aria-label': 'description' }} type='text'
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
              <input value='+' type='button' onClick={() => {
                if(product.name === totalOrder[index].name){
                  totalOrder[index].qtd++;
                  setTotalOrder([...totalOrder]); 
                }
              }}/>
              <button>{product.qtd }</button>
              <input value='-' type='button' onClick={() => {
                if(product.name === totalOrder[index].name){
                  totalOrder[index].qtd--;
                  setTotalOrder([...totalOrder]); 
                }
              }}/>
              <span>{product.name} </span>
              <span>{product.flavor === 'null' ? '' : product.flavor} </span>
              <span>{product.complement === 'null' ? '' : product.complement }</span>
              <span> R$ {product.price},00  </span> 
            </div>
          ))} 
        
        <div>
          <button onClick={() => clearHall()}>Cancelar</button>
          <button onClick={() => validadeInputs()}>Enviar para cozinha</button>
        </div>
          
        <div>
          <button onClick={listBreakFast} className={classes.submitMenuType}>Café da manhã</button>
          <button onClick={listHamburguer} className={classes.submitMenuType}>Hamburguers</button>
          <button onClick={listDrinks} className={classes.submitMenuType} >Bebidas</button>
          {listMap.map((product) => (
            <div key={product.id} >
              <button className={classes.submitMenuItems} onClick={()=> setTotalOrder([...totalOrder, product])}>{product.name} {product.flavor} {product.complement}<br></br>R$ {product.price},00  </button>
            </div>)
          )}
        </div>
      </Grid>
      <Copyright />
    </>
  )
};
export default Menu;