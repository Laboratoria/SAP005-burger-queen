import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input'; 
import {Copyright, useStyles, NavBar, NewTaskInput, ListItem} from '../../components.js';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Kitchen (){
  const classes = useStyles();
  const [list, setList] = useState([]);
  const [listMap, setListMap] = useState([]);
  const tokenLocal = localStorage.getItem('token');

  useEffect(() => {
    fetch('https://lab-api-bq.herokuapp.com/orders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${tokenLocal}`
      },
    })
    .then(response => response.json())
    .then(data => {
      const dados = data
      console.log(dados);
      setList(dados) 
    })
  }, [tokenLocal])
  const listDrinks = () => {
    const productsDrinks = list;
    setListMap(productsDrinks);
  } 

  return (
      <div>
        <Grid id='menuList'className='container' container direction="row" justify="flex-start" alignItems="flex-start">
          <NavBar/>   
        <h1>Kitchen</h1>
        <button onClick={listDrinks} className={classes.submitMenuType} >Pedidos</button>
        {listMap.map((product) => (
            <div key={product.id} name={product.client_name} table={product.table}>
              <button className={classes.submitMenuItems} >{product.client_name} {product.table} {product.Products.name}</button>
            </div>)
          )}
    
        </Grid>
      </div>
  );
}
  
  export default Kitchen;