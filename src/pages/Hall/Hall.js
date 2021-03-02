import React, { useEffect, useState } from 'react';
import './Hall.css';
import {Copyright, NavBar, useStyles} from "../../components/Hearder/Hearder.js";
//import Grid from '@material-ui/core/Grid';
//import Input from '@material-ui/core/Input'; 
//import { Link } from 'react-router-dom';
//import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const Hall = () => {
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
    
    const qtd = quantityOrder.reduce(function (array, productItem) {
      array[productItem.id] = array[productItem.id] || [];
      array[productItem.id].push(productItem);
      return array;
    }, Object.create(null));//criar um novo objeto
  
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
    <div className={classes.containerdelivery}>

   <NavBar />
   <Copyright />

   <button onClick={() => postOrder()}>Enviar para cozinha</button>
      </div>
  )
};

export default Hall;