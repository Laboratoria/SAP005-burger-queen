import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input'; 
import {useStyles, NavBar} from '../../components.js';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';


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
      const dados = data.map(elem =>  ({...elem, disabled: false}));
      setList(dados) 
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
  const [productPrices, setProductPrices] = useState(0);
  const [totalOrder, setTotalOrder] = useState([]);

  useEffect(()=>{
    console.log(totalOrder)
  },[totalOrder])

  const HandleOrder = (e) => {
    e.preventDefault()
    

    const product = e.target.parentNode;
    console.log(product)

    const idProduct = Number(product.getAttribute('id'))
    console.log(idProduct)
    const nameProduct = product.getAttribute('name')
    const priceProduct = product.getAttribute('price')
    const flavorProduct = product.getAttribute('flavor')
    const complementProduct = product.getAttribute('complement')
    
    setListMap(prevListMap => {
      return prevListMap.map(prevElem => prevElem.id === idProduct ? {...prevElem, disabled: true } : prevElem)
    })

    const orderTemplate = {
      id: idProduct,
      name: nameProduct,
      price: priceProduct,
      flavor: flavorProduct,
      complement: complementProduct,
      qtd: 1
    }

    orderUpdate(orderTemplate)
    calculatorOrder()
  }

  function ascendQuantity (product,index) {
    if(product.name === totalOrder[index].name){
      totalOrder[index].qtd++;
      setTotalOrder([...totalOrder]); 
      calculatorOrder();
    }
  }

  function downQuantity (product, index) {
    if(product.name === totalOrder[index].name && product.qtd === 1){
      setListMap(prevListMap => {
        return prevListMap.map(prevElem => prevElem.id === product.id ? {...prevElem, disabled: false } : prevElem)
      })
      totalOrder.splice(index, 1);
      setTotalOrder([...totalOrder]);
      calculatorOrder()
    }else if (product.name === totalOrder[index].name) {
  
      totalOrder[index].qtd--;
      setTotalOrder([...totalOrder]);
      calculatorOrder(); 
    }
  }

  const calculatorOrder = () => {
    setProductPrices(totalOrder.reduce((acumulado, product) => acumulado + (product.qtd*Number(product.price)), 0))
  }

  const orderUpdate = (product) => {
    const newArray = totalOrder
    newArray.push(product)
    setTotalOrder(newArray)
  }

  function validadeInputs(){
    const table = (order.table);
    const client = (order.client);
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


  return (
    <>
      
        <NavBar/>   
        <Grid id='menuListOrder'className='containerMenu' >
          <Grid >
            <button onClick={listBreakFast} className={classes.submitMenuType}>Café da manhã</button>
            <button onClick={listHamburguer} className={classes.submitMenuType}>Hamburguers</button>
            <button onClick={listDrinks} className={classes.submitMenuType} >Bebidas</button>
            {listMap.map((product) => (
              <div key={product.id} id={product.id} name={product.name} flavor={product.flavor} complement={product.complement} price={product.price}>
                <button className={classes.submitMenuItems} disabled={product.disabled} onClick ={HandleOrder}>{product.name} {product.flavor} {product.complement}<br></br>R$ {product.price},00  </button>
              </div>)
            )}
          </Grid>          
      </Grid>
      <Grid>
      <Grid id='orderList'  className={classes.orderItemsTotal}>
          <form className={classes.paperTable}  noValidate autoComplete="off" >
              <Input className = {classes.inputTableName} placeholder="Nome" fullWidth inputProps={{ 'aria-label': 'description' }} type='text'
              name='nome'
              required
              onChange={(event) =>
                setOrder({ ...order, client: event.target.value })
              }/>
              <Input className = {classes.inputTableName}  placeholder="Mesa" inputProps={{ 'aria-label': 'description' }} type='text'
              name='mesa'
              required
              onChange={(event) =>
                setOrder({ ...order, table: event.target.value })
              } />
          </form>
          {totalOrder.map((product, index) => (
            <div key={index} >
              <AddCircleIcon value='+' type='button' border='none' onClick={ () => {ascendQuantity (product,index)}}/>
              <span>{product.qtd }</span>
              <RemoveCircleIcon  value='-' type='button' onClick={() => {downQuantity (product, index)}}/>
              <span>{product.name} </span>
              <span>{product.flavor === 'null' ? '' : product.flavor} </span>
              <span>{product.complement === 'null' ? '' : product.complement }</span>
              <span> R$ {product.price},00  </span> 
            </div>
          ))} 
          <div>
          <p> Total Pedido: R$ {productPrices}</p>
          <Button variant="outlined" color="primary" onClick={() => clearHall()}>Cancelar</Button>
          <Button variant="outlined" color="primary"onClick={() => validadeInputs()}>Enviar para cozinha</Button>
        </div>
        </Grid>
      </Grid>
    </>
  )
};
export default Menu;